(() => {

  // No aplicando el principio de responsabilidad única

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthDate : Date;  
    gender    : Gender;
    name      : string;
  }

  class Person {
    public birthDate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthDate }: PersonProps ) {
      this.name      = name;
      this.gender    = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    birthDate: Date;
    email    : string;
    gender   : Gender;
    name     : string;
    role     : string;
  }

  class User extends Person {

    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({
      birthDate,
      email,
      gender,
      name,
      role,
    }: UserProps ) {
      super({ name, gender, birthDate });
      this.lastAccess = new Date();
      this.email = email;
      this.role  = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    birthDate        : Date;
    email            : string;
    gender           : Gender;
    lastOpenFolder   : string;
    name             : string;
    role             : string;
    workingDirectory : string;
  }

  class UserSettings extends User {

    public workingDirectory: string;
    public lastOpenFolder  : string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthDate,
    }: UserSettingsProps ) {
      super({ email, role, name, gender, birthDate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder   = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    birthDate: new Date('2003-06-27'),
    email: 'julio@google.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Fernando',
    role: 'Admin',
    workingDirectory: '/usr/home',
  });

  console.log({ userSettings });

})();