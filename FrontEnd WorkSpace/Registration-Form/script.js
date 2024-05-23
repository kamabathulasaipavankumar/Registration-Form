let nameele = document.getElementById("Nameid");
let nameErrorMsg = document.getElementById("Errormsgid");
let Emailele = document.getElementById("Emailid");
let emailErrorMsg = document.getElementById("emailErrormsgid");
let password = document.getElementById("passwordid");
let countrySelect = document.getElementById("country");
let stateSelect = document.getElementById("state");
let Addressele = document.getElementById("inputAddress");
let qualificationEle1 = document.getElementById("Qualification1");
let qualificationEle2 = document.getElementById("Qualification2");
let qualificationEle3 = document.getElementById("Qualification3");
let maleEle = document.getElementById("MaleId");
let femaleEle = document.getElementById("FemaleId");

let DateOfBrithEle = document.getElementById("dateofBrithid");


let submitBtnEle = document.getElementById("sumbitBtnid");
let ClearBtnEle = document.getElementById("clearBtnid");
let tableBody = document.getElementById("tableid");
let array = [];
let index;
let imgDetails;
let signaturePath;


function previewImage(event) {
  var input = event.target;
  var imagePath = document.getElementById("photography").value;
  var imageFileName = imagePath.split("\\").pop();
  //console.log(filename); // Output: Capture.JPG
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var imagePreview = document.getElementById('imagePreview');
    imagePreview.src = dataURL;
    imagePreview.style.display = 'block';
    imgDetails = {
      dataURL: dataURL,
      imageFileName: imageFileName
    };
    // console.log(imagePath.dataURL);
  };
  reader.readAsDataURL(input.files[0]);
}

function previewSignatureImage(event) {
  var input = event.target;
  var signPath = document.getElementById("Signature").value;
  //console.log(signPath)
  var signFileName = signPath.split("\\").pop();
  //console.log(signFileName)
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var signaturePreview = document.getElementById('signaturePreview');
    signaturePreview.src = dataURL;
    signaturePreview.style.display = 'block';
    signaturePath = {
      dataURL: dataURL,
      signFileName: signFileName
    };
    //console.log(signaturePath.dataURL);
  };
  reader.readAsDataURL(input.files[0]);
}



let stateData = {
  india: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala"],
  usa: ["New York", "California", "Texas"],
  canada: ["Ontario", "Quebec", "British Columbia"]
};

let districtData = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
  "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", ],
  "New York": ["New York City", "Buffalo", "Rochester"],
  "California": ["Los Angeles", "San Francisco", "San Diego"],
  "Texas": ["Houston", "Dallas", "Austin"],
  "Ontario": ["Toronto", "Ottawa", "Mississauga"],
  "Quebec": ["Montreal", "Quebec City", "Laval"],
  "British Columbia": ["Vancouver", "Victoria", "Burnaby"]
};


// function populateStates() {
//   var countrySelect = document.getElementById("country");
//   var stateSelect = document.getElementById("state");
//   var country = countrySelect.value;
//   stateSelect.innerHTML = "<option value=''>Select State/Province</option>";

//   if (country) {
//     var states = stateData[country];
//     states.forEach(function(state) {
//       var option = document.createElement("option");
//       option.textContent = state;
//       option.value = state;
//       stateSelect.appendChild(option);
//     });
//   }
// }


let myformele = document.getElementById("formid");
myformele.addEventListener("submit", function (event) {
  event.preventDefault();
})

submitBtnEle.onclick = () => {
  let selectedGenderEle = document.querySelector('input[name="Gender"]:checked')

  // if(genderArray.length === 0 ){
  //   alert("please select gender");
  //   return;
  // }
  // console.log(imgDetails.dataURL);
  // console.log(signaturePath.dataURL);
  let eduArray = [];
  document.querySelectorAll('input[name="Qualification"]:checked')
    .forEach(checkbox => {
      eduArray.push(checkbox.value);
      // console.log(eduArray);
    });
  let hobbiesArray = [];
  document.querySelectorAll('input[name="Hobbies"]:checked')
    .forEach(checkbox => {
      hobbiesArray.push(checkbox.value);
      // console.log(hobbiesArray);
    });
  if (submitBtnEle.textContent === "Update") {
    

    submitBtnEle.textContent = "Submit";
    let UserDetails = {
      imageUrl: imgDetails.dataURL,
      imageName: imgDetails.imageFileName,
      signatureUrl: signaturePath.dataURL,
      signName: signaturePath.signFileName,
      nameele: nameele.value,
      Emailele: Emailele.value,
      password: password.value,
      gender: selectedGenderEle.value,
      qualification: eduArray,
      hobbies: hobbiesArray,
      country: country.value,
      state: state.value,
      district: district.value,
      Addressele: Addressele.value,
      DateOfBrithEle: DateOfBrithEle.value,
    }
    array[index] = UserDetails;
    localStorage.setItem("user", JSON.stringify(array));
  } else {
    let UserDetails = {
      imageUrl: imgDetails.dataURL,
      imageName: imgDetails.imageFileName,
      signatureUrl: signaturePath.dataURL,
      signName: signaturePath.signFileName,
      nameele: nameele.value,
      Emailele: Emailele.value,
      password: password.value,
      gender: selectedGenderEle.value,
      qualification: eduArray,
      hobbies: hobbiesArray,
      country: country.value,
      state: state.value,
      district: district.value,
      Addressele: Addressele.value,
      DateOfBrithEle: DateOfBrithEle.value,
    }

    array.push(UserDetails)

    localStorage.setItem("user", JSON.stringify(array))
  }
  clearForm()
  createTable()
}

function clearForm() {
  imagePreview.src = ""
  imagePreview.alt = ""
  signaturePreview.alt = ""
  signaturePreview.src = ""
  nameele.value = ""
  Emailele.value = ""
  password.value = ""
  country.value = ""
  state.value = ""
  district.value = ""
  Addressele.value = ""
  DateOfBrithEle.value = ""
  let clearGenderEle = document.querySelector('input[name="Gender"]:checked');
  clearGenderEle.checked = false;
  let clearQualification = document.querySelectorAll('input[name="Qualification"]:checked');
  clearQualification.forEach(ele => ele.checked = false)
  let clearHobbies = document.querySelectorAll('input[name="Hobbies"]:checked');
  clearHobbies.forEach(ele => ele.checked = false)
  let sigInputEle = document.getElementById("Signature");
  sigInputEle.value = "";
  let imgInputEle = document.getElementById("photography");
  imgInputEle.value = ""
}


ClearBtnEle.onclick = () => {
  localStorage.clear();
  clearForm();
  createTable()
}


// showing Required message on not filling name and email

nameele.addEventListener("blur", function (event) {

  if (event.target.value === "") {
    nameErrorMsg.textContent = "Required*"
  } else {
    nameErrorMsg.textContent = ""
  }
})

Emailele.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrorMsg.textContent = "Required*"
  } else {
    emailErrorMsg.textContent = ""
  }
})




//  show password function
function toggle() {
  let password = document.getElementById("passwordid");
  let iconPass = document.getElementById("passwordIcon");
  if (password.type === "password") {
    password.type = "text";
    iconPass.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>`;
  } else {
    password.type = "password";

    iconPass.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                      </svg>`;
  }
}

// Function to populate the states/provinces dropdown based on the selected country
function populateStates() {

  var country = countrySelect.value;
  stateSelect.innerHTML = "<option value=''>Select State/Province</option>";

  if (country) {
    var states = stateData[country];
    states.forEach(function (state) {
      var option = document.createElement("option");
      option.textContent = state;
      option.value = state;
      stateSelect.appendChild(option);
    });
  }
}

// Function to populate the districts/regions dropdown based on the selected state/province
function populateDistricts() {
  var stateSelect = document.getElementById("state");
  var districtSelect = document.getElementById("district");
  var state = stateSelect.value;
  districtSelect.innerHTML = "<option value=''>Select District/Region</option>";

  if (state) {
    var districts = districtData[state];
    districts.forEach(function (district) {
      var option = document.createElement("option");
      option.textContent = district;
      option.value = district;
      districtSelect.appendChild(option);
    });
  }
}

// Create Table
function createTable() {
  tableBody.innerHTML = "";
  let localData = JSON.parse(localStorage.getItem("user"));
  (localData) ? array = localData: array = [];
  if (array != null) {
    for (let i = 0; i < array.length; i++) {

      const data = array[i];
      let rowele = document.createElement("tr")

      let SNoEle = document.createElement("td")
      SNoEle.textContent = i + 1;
      rowele.appendChild(SNoEle)


      let photography = document.createElement("td");
      let photoImg = document.createElement("img");
      photoImg.src = data.imageUrl;
      photoImg.setAttribute("style", "width:150px")
      photography.appendChild(photoImg)
      rowele.appendChild(photography)
      // imageUrl

      let Signature = document.createElement("td");
      let SignatureImg = document.createElement("img");
      SignatureImg.src = data.signatureUrl;
      SignatureImg.setAttribute("style", "width:150px")
      Signature.appendChild(SignatureImg)
      rowele.appendChild(Signature)

      let NameEle = document.createElement("td")
      NameEle.textContent = data.nameele
      rowele.appendChild(NameEle)

      let EmailEle = document.createElement("td")
      EmailEle.textContent = data.Emailele
      rowele.appendChild(EmailEle)

      let PassEle = document.createElement("td")
      PassEle.textContent = data.password
      rowele.appendChild(PassEle)
      // gender

      let genderEle = document.createElement("td")
      genderEle.textContent = data.gender;
      rowele.appendChild(genderEle)

      let QualificationEle = document.createElement("td")
      QualificationEle.textContent = data.qualification;
      rowele.appendChild(QualificationEle)

      let hobbiesEle = document.createElement("td")
      hobbiesEle.textContent = data.hobbies;
      rowele.appendChild(hobbiesEle)

      let CountryEle = document.createElement("td")
      CountryEle.textContent = data.country
      rowele.appendChild(CountryEle)

      let StateEle = document.createElement("td")
      StateEle.textContent = data.state
      rowele.appendChild(StateEle)


      let districtEle = document.createElement("td")
      districtEle.textContent = data.district
      rowele.appendChild(districtEle)

      let AddressEle = document.createElement("td")
      AddressEle.textContent = data.Addressele
      rowele.appendChild(AddressEle)



      let DateofBrith = document.createElement("td")
      DateofBrith.textContent = data.DateOfBrithEle
      rowele.appendChild(DateofBrith)



      let action = document.createElement('td');
      let deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "Delete";
      deleteBtn.className = "btn btn-outline-danger"
      deleteBtn.onclick = () => {
        array.splice(i, 1);
        localStorage.setItem("user", JSON.stringify(array));
        createTable();
      }
      action.appendChild(deleteBtn);
      rowele.appendChild(action);

      let EditBtn = document.createElement("button")
      EditBtn.textContent = "Edit";
      EditBtn.className = "btn btn-outline-success"
      EditBtn.onclick = () => {

        submitBtnEle.textContent = "Update";
        index = i;
        // console.log(array[i])
        nameele.value = array[i].nameele;
        Emailele.value = array[i].Emailele;
        password.value = array[i].password;
        country.value = array[i].country
        state.value = array[i].state;
        district.value = array[i].district;
        Addressele.value = array[i].Addressele
        DateOfBrithEle.value = array[i].DateOfBrithEle;
        let genderId = array[i].gender + "id";
        document.getElementById(`${genderId}`).checked = true;
        let updatedQualificationEle = document.querySelectorAll('input[name="Qualification"]');
        // console.log( xv );
        updatedQualificationEle.forEach((ele) => {
          let existQualification = array[i].qualification.find(e => e + "Id" === ele.id);
          ele.checked = (existQualification) ? true : false;
        });
        let updatedHobbiesEle = document.querySelectorAll('input[name="Hobbies"]');
        updatedHobbiesEle.forEach((ele) => {
          let existHobby = array[i].hobbies.find(e => e + "Id" === ele.id);
          ele.checked = (existHobby) ? true : false;
        })

        let updatedImagePreview = document.getElementById("imagePreview");
        updatedImagePreview.src = array[i].imageUrl;
        updatedImagePreview.style.display = 'block';
        dataURL = array[i].imageUrl;

        let updatedSignPreview = document.getElementById("signaturePreview");
        updatedSignPreview.src = array[i].signatureUrl;
        updatedSignPreview.style.display = 'block';
        let updatedImageName = document.getElementById("photography");
        updatedImageName.type = "";
        updatedImageName.value = array[i].imageName;


        let updatedSignName = document.getElementById("Signature");
        updatedSignName.type = "";
        updatedSignName.value = array[i].signName;



      }



      action.appendChild(EditBtn);
      rowele.appendChild(action);
      tableBody.appendChild(rowele)
    }
  }
}
createTable()