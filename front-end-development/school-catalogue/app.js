class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        if (['primary', 'middle', 'high'].includes(level.toLowerCase())) {
            this._level = level.toLowerCase();
        } else {
            console.log(`'${level}' is not a valid school level. Please retry using 'primary', 'middle' or 'high'.`)
        }
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(number) {
        if (typeof number === 'number') {
            this._numberOfStudents = number;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    quickFacts() {
        console.log(`${this.name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let randomIndex = Math.floor(Math.random()*(substituteTeachers.length-1));
        return substituteTeachers[randomIndex];
    }
}
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}
class MiddleSchool extends School {
    constructor(name, numberOfStudents) {
        super(name, 'middle', numberOfStudents)
    }
}
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

class SchoolCatalogue {
    constructor(schools) {
        if (Array.isArray(schools)) {
            this._schools = schools
        } else {
            console.log('SchoolCatalogue can only be initalised with an array of schools.')
        }
    }
    get schools() {
        return this._schools
    }
    addSchool(name, level, numberOfStudents, additional) {
        switch(level) {
            case 'primary':
                this._schools.push(new PrimarySchool(name, numberOfStudents, additional)); break;
            case 'middle':
                this._schools.push(new MiddleSchool(name, numberOfStudents)); break;
            case 'high':
                this._schools.push(new HighSchool(name, numberOfStudents, additional)); break;
        }
    }
}

// Examples of use
lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()
rosterOfSubs = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']
console.log(School.pickSubstituteTeacher(rosterOfSubs))
alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeams)
schoolsInMaine = new SchoolCatalogue([lorraineHansbury, alSmith])
console.log(schoolsInMaine)
schoolsInMaine.addSchool('Newman','middle',504)
console.log(schoolsInMaine)