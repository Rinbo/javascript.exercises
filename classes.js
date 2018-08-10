// classes.js

class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    get department() {
      return this._department;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

  // Create super-class
  class HospitalEmployee {
    constructor(name){
      this._name = name;
      this._remainingVacationDays = 20;
    }

    static generatePassword() {
        return Math.floor(Math.random() * 10000);
      }

    get name(){
      return this._name;
    }
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }
  }

  // Child classes

  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
      this._certifications = certifications;
    }
    get certifications(){
      return this._certifications;
    }
    addCertification(newCertification){
      this._certifications.push(newCertification);
    }
  }
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
  nurseOlynyk.addCertification("Genetics");
  console.log(nurseOlynyk.certifications)
  console.log(Nurse.generatePassword())