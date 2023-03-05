const token = localStorage.getItem("token");
let src;
let idSrc;

fetch("http://65.108.33.225:3000/profile", {
  method: "GET",
  headers: { Authorization: `Bearer ${token}` },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.Error) {
      localStorage.clear();
    } else {
      const studentImg = document.getElementsByClassName("student-img");
      const studentName = document.getElementsByClassName("student-name");

      // id
      const englishName = document.getElementById("english-name");
      const arabicName = document.getElementById("arabic-name");
      const birthDate = document.getElementById("birth-date");
      const phoneNum = document.getElementById("phone");
      const landline = document.getElementById("landline");
      const idNum = document.getElementById("id.number");

      const parentName = document.getElementById("parentalInfo[0].name");
      const parentEmail = document.getElementById("parentalInfo[0].email");
      const parentRelation = document.getElementById(
        "mui-component-select-parentalInfo[0].relation"
      );

      const schoolName = document.getElementById(
        "mui-component-select-education.school"
      );
      const grade = document.getElementById(
        "mui-component-select-education.grade"
      );
      const greadYear = document.getElementById(
        "mui-component-select-education.schoolGraduationDate"
      );

      // class
      const gender = document.getElementsByClassName("gender");
      const nationalId = document.getElementsByClassName("national-id");
      const passportNum = document.getElementsByClassName("passport-num");
      const EmailAddress = document.getElementsByClassName("email-address");
      const nationality = document.getElementsByClassName("nationality");
      const city = document.getElementsByClassName("city");
      const address = document.getElementsByClassName("address");
      const idCopy = document.getElementsByClassName("id-copy");

      const nickName = document.getElementsByClassName("student-nick-name");

      const mathematics = document.getElementsByClassName("mathematics");
      const literacy = document.getElementsByClassName("literacy");
      const biology = document.getElementsByClassName("biology");
      const math = document.getElementsByClassName("math");

      const retagDegree = document.getElementsByClassName("retage-degree");

      // ---------------- retag
      if (data.retagProfile) {
        src = "../assist/images/retag_img.jpeg";
        idSrc = "../assist/images/retag_id.jpg";

        for (let i = 0; i < retagDegree.length; i++) {
          retagDegree[i].style.display = "none";
        }

        for (let i = 0; i < nickName.length; i++) {
          nickName[i].innerHTML = data.retagProfile.retagPersonalInfo.NickName;
        }

        for (let i = 0; i < studentImg.length; i++) {
          studentImg[i].src = src;
          studentImg[i].data = src;
        }

        for (let i = 0; i < studentName.length; i++) {
          studentName[i].innerHTML =
            data.retagProfile.retagPersonalInfo.EnglishName;
        }

        for (let i = 0; i < gender.length; i++) {
          gender[i].innerHTML = data.retagProfile.retagPersonalInfo.Gender;
        }

        for (let i = 0; i < nationalId.length; i++) {
          nationalId[i].innerHTML =
            data.retagProfile.retagPersonalInfo.NationalIDNumber;
        }

        for (let i = 0; i < passportNum.length; i++) {
          passportNum[i].innerHTML =
            data.retagProfile.retagPersonalInfo.PassportNumber;
        }

        for (let i = 0; i < EmailAddress.length; i++) {
          EmailAddress[i].innerHTML =
            data.retagProfile.retagPersonalInfo.EmailAddress;
        }

        for (let i = 0; i < nationality.length; i++) {
          nationality[i].innerHTML =
            data.retagProfile.retagPersonalInfo.Nationality;
        }
        for (let i = 0; i < city.length; i++) {
          city[i].value = data.retagProfile.retagPersonalInfo.CountryCity;
        }
        for (let i = 0; i < address.length; i++) {
          address[i].value = data.retagProfile.retagPersonalInfo.Address1;
        }

        for (let i = 0; i < idCopy.length; i++) {
          idCopy[i].data = idSrc;
        }

        // 1----
        for (let i = 0; i < mathematics.length; i++) {
          mathematics[i].innerHTML =
            data.retagProfile.retagPersonalInfo.mathematical;
        }

        for (let i = 0; i < literacy.length; i++) {
          literacy[i].innerHTML = data.retagProfile.retagPersonalInfo.literacy;
        }

        for (let i = 0; i < biology.length; i++) {
          biology[i].innerHTML = data.retagProfile.retagPersonalInfo.Biology;
        }

        for (let i = 0; i < math.length; i++) {
          math[i].innerHTML = data.retagProfile.retagPersonalInfo.math;
        }
        // 1---

        // RetageDate

        englishName.innerHTML = data.retagProfile.retagPersonalInfo.EnglishName;
        arabicName.innerHTML = data.retagProfile.retagPersonalInfo.ArabicName;
        birthDate.innerHTML = data.retagProfile.retagPersonalInfo.DateOfBirth;
        phoneNum.value = data.retagProfile.retagPersonalInfo.MobileNumber;
        landline.placeholder = data.retagProfile.retagPersonalInfo.Landline;
        idNum.value = data.retagProfile.retagPersonalInfo.NationalIDNumber;

        parentName.value = data.retagProfile.retagParentInformation.Name;
        parentEmail.value = data.retagProfile.retagParentInformation.Email;
        parentRelation.innerHTML =
          data.retagProfile.retagParentInformation.Relationship;

        schoolName.innerHTML =
          data.retagProfile.retagSchoolInformation.SchoolName;
        grade.innerHTML = data.retagProfile.retagSchoolInformation.Grade;
        greadYear.innerHTML =
          data.retagProfile.retagSchoolInformation.YearOfGraduation;
      }

      // ------------------------ tasnem
      if (data.tasnemProfile) {
        src = "../assist/images/tasnem.png";
        idSrc = "../assist/images/tasneedId.png";

        for (let i = 0; i < retagDegree.length; i++) {
          retagDegree[i].style.display = "none";
        }

        for (let i = 0; i < nickName.length; i++) {
          nickName[i].innerHTML = data.tasnemProfile.tasneemPersonalInfo.NickName;
        }

        for (let i = 0; i < studentImg.length; i++) {
          studentImg[i].src = src;
          studentImg[i].data = src;
        }

        for (let i = 0; i < studentName.length; i++) {
          studentName[i].innerHTML =
          data.tasnemProfile.tasneemPersonalInfo.EnglishName;
        }

        for (let i = 0; i < gender.length; i++) {
          gender[i].innerHTML = data.tasnemProfile.tasneemPersonalInfo.Gender;
        }

        for (let i = 0; i < nationalId.length; i++) {
          nationalId[i].innerHTML =
          data.tasnemProfile.tasneemPersonalInfo.NationalIDNumber;
        }

        for (let i = 0; i < passportNum.length; i++) {
          passportNum[i].innerHTML =
            data.tasnemProfile.tasneemPersonalInfo.PassportNumber;
        }

        for (let i = 0; i < EmailAddress.length; i++) {
          EmailAddress[i].innerHTML =
            data.tasnemProfile.tasneemPersonalInfo.EmailAddress;
        }

        for (let i = 0; i < nationality.length; i++) {
          nationality[i].innerHTML =
            data.tasnemProfile.tasneemPersonalInfo.Nationality;
        }
        for (let i = 0; i < city.length; i++) {
          city[i].value = data.tasnemProfile.tasneemPersonalInfo.CountryCity;
        }
        for (let i = 0; i < address.length; i++) {
          address[i].value = data.tasnemProfile.tasneemPersonalInfo.Address1;
        }

        for (let i = 0; i < idCopy.length; i++) {
          idCopy[i].data = idSrc;
        }

        for (let i = 0; i < mathematics.length; i++) {
          mathematics[i].innerHTML =
            data.tasnemProfile.tasneemPersonalInfo.mathematical;
        }

        for (let i = 0; i < literacy.length; i++) {
          literacy[i].innerHTML = data.tasnemProfile.tasneemPersonalInfo.literacy;
        }

        for (let i = 0; i < biology.length; i++) {
          biology[i].innerHTML = data.tasnemProfile.tasneemPersonalInfo.Biology;
        }

        for (let i = 0; i < math.length; i++) {
          math[i].innerHTML = data.tasnemProfile.tasneemPersonalInfo.math;
        }

        englishName.innerHTML = data.tasnemProfile.tasneemPersonalInfo.EnglishName;
        arabicName.innerHTML = data.tasnemProfile.tasneemPersonalInfo.ArabicName;
        birthDate.innerHTML = data.tasnemProfile.tasneemPersonalInfo.DateOfBirth;
        phoneNum.value = data.tasnemProfile.tasneemPersonalInfo.MobileNumber;
        landline.placeholder = data.tasnemProfile.tasneemPersonalInfo.Landline;
        idNum.value = data.tasnemProfile.tasneemPersonalInfo.NationalIDNumber;

        parentName.value = data.tasnemProfile.tasneemParentInformation.Name;
        parentEmail.value = data.tasnemProfile.tasneemParentInformation.Email;
        parentRelation.innerHTML =
          data.tasnemProfile.tasneemParentInformation.Relationship;

        schoolName.innerHTML =
          data.tasnemProfile.tasneemSchoolInformation.SchoolName;
        grade.innerHTML = data.tasnemProfile.tasneemSchoolInformation.Grade;
        greadYear.innerHTML =
          data.tasnemProfile.tasneemSchoolInformation.YearOfGraduation;
      }

      // ------------------- amr
      if (data.amrProfile) {
        src = "../assist/images/amr-img.jpeg";

        for (let i = 0; i < nickName.length; i++) {
          nickName[i].innerHTML = data.amrProfile.amrpersonalInfo.NickName;
        }

        for (let i = 0; i < studentImg.length; i++) {
          studentImg[i].src = src;
          studentImg[i].data = src;
        }

        for (let i = 0; i < studentName.length; i++) {
          studentName[i].innerHTML =
            data.amrProfile.amrpersonalInfo.EnglishName;
        }

        for (let i = 0; i < gender.length; i++) {
          gender[i].innerHTML = data.amrProfile.amrpersonalInfo.Gender;
        }

        for (let i = 0; i < nationalId.length; i++) {
          nationalId[i].innerHTML =
            data.amrProfile.amrpersonalInfo.NationalIDNumber;
        }

        for (let i = 0; i < passportNum.length; i++) {
          passportNum[i].innerHTML =
            data.amrProfile.amrpersonalInfo.PassportNumber;
        }

        for (let i = 0; i < EmailAddress.length; i++) {
          EmailAddress[i].innerHTML =
            data.amrProfile.amrpersonalInfo.EmailAddress;
        }

        for (let i = 0; i < nationality.length; i++) {
          nationality[i].innerHTML =
            data.amrProfile.amrpersonalInfo.Nationality;
        }
        for (let i = 0; i < city.length; i++) {
          city[i].value = data.amrProfile.amrpersonalInfo.CountryCity;
        }
        for (let i = 0; i < address.length; i++) {
          address[i].value = data.amrProfile.amrpersonalInfo.Address1;
        }

        for (let i = 0; i < idCopy.length; i++) {
          idCopy[i].data = idSrc;
        }

        // 1----
        for (let i = 0; i < mathematics.length; i++) {
          mathematics[i].innerHTML =
            data.amrProfile.amrpersonalInfo.mathematical;
        }

        for (let i = 0; i < literacy.length; i++) {
          literacy[i].innerHTML = data.amrProfile.amrpersonalInfo.literacy;
        }

        for (let i = 0; i < biology.length; i++) {
          biology[i].innerHTML = data.amrProfile.amrpersonalInfo.Biology;
        }

        for (let i = 0; i < math.length; i++) {
          math[i].innerHTML = data.amrProfile.amrpersonalInfo.math;
        }
        // 1---

        englishName.innerHTML = data.amrProfile.amrpersonalInfo.EnglishName;
        arabicName.innerHTML = data.amrProfile.amrpersonalInfo.ArabicName;
        birthDate.innerHTML = data.amrProfile.amrpersonalInfo.DateOfBirth;
        phoneNum.value = data.amrProfile.amrpersonalInfo.MobileNumber;
        landline.placeholder = data.amrProfile.amrpersonalInfo.Landline;
        idNum.value = data.amrProfile.amrpersonalInfo.NationalIDNumber;

        parentName.value = data.amrProfile.amrParentInformation.Name;
        parentEmail.value = data.amrProfile.amrParentInformation.Email;
        parentRelation.innerHTML =
          data.amrProfile.amrParentInformation.Relationship;

        schoolName.innerHTML = data.amrProfile.amrSchoolInformation.SchoolName;
        grade.innerHTML = data.amrProfile.amrSchoolInformation.Grade;
        greadYear.innerHTML =
          data.amrProfile.amrSchoolInformation.YearOfGraduation;
      }
    }
  });
