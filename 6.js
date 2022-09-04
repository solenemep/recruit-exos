const angleTakeOff = 3; // imaginary value
const angleLanding = -3; // imaginary value

// In that case, I would not extend classes.
// It makes no sense to me that Aircraft inherits directly from Flag's or Wing's methods. Also :
// - a Aicraft can have several Wings
// - a Wing can have several Flaps
// And even for lisibility I don't think the extention is valid

// But yes, it makes sense to :
// - deploy Wing class in Aircraft constructor
// - deploy Flap class in Wing constructor
// to be able to use each object methods when executing larger action

// See the example :

class Flap {
  constructor() {
    this.angle = 0;
  }

  setForTakeOff() {
    this.angle = angleTakeOff;
    console.log(`Flag set on ${this.angle}`);
  }

  setForLanding() {
    this.angle = angleLanding;
    console.log(`Flag set on ${this.angle}`);
  }
}

class Wing {
  constructor(position) {
    this.position = position;
    this.flap = new Flap();
  }

  setForTakeOff() {
    this.flap.setForTakeOff(angleTakeOff);
    console.log(`Wing ${this.position} ready`);
  }

  setForLanding() {
    this.flap.setForLanding(angleLanding);
    console.log(`Wing ${this.position} ready`);
  }
}

class Aircraft {
  constructor(model, company) {
    this.model = model;
    this.company = this.company;
    this.wing1 = new Wing("left");
    this.wing2 = new Wing("right");
  }

  takeOff() {
    this.wing1.setForTakeOff();
    this.wing2.setForTakeOff();
    console.log(`${this.model} is taking off`);
  }

  land() {
    this.wing1.setForLanding();
    this.wing2.setForLanding();
    console.log(`${this.model} is landing`);
  }
}

const plane = new Aircraft("Airbus", "AirFrance");
plane.takeOff();
plane.land();
