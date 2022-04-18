class AddressBook{
 // ( Getter and Setter )
    // name
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}()[A-Z]{1}[a-zA-Z ]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";
    }

    //phoneNumber
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        const pattern_PHONE_NUMBER = RegExp('^(91 )[5-9][0-9]{9}$');
        if (pattern_PHONE_NUMBER.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Phone number is incorrect";
    }

    // address
    get address() { return this._address; }
    set address(address) {
        const pattern_ADDRESS_CITY_STATE = RegExp('^[A-Za-z.+, ]{4,}$');
        if (pattern_ADDRESS_CITY_STATE.test(address))
            this._address = address;
        else throw "Address is incorrect";
    }

    //zipCode
    get zipCode() { return this._zipCode; }
    set zipCode(zipCode) {
        const pattern_ZipCode = RegExp('^[0-9 ]{5,10}$');
        if (pattern_ZipCode.test(zipCode))
            this._zipCode = zipCode;
        else throw "Zip code is incorrect";
    }

    //city
    get city() { return this._city; }
    set city(city) { this._city = city; }

    // state
    get state() { return this._state; }
    set state(state) { this._state = state; }

    toString() {
        return (" Full name = " + this._name + ", phoneNumber= " + this._phoneNumber + ", address= " + this._address + ", city= " + this._city + ", state= " + this._state + ", zip= " + this._zipCode);
    }
}

/**
 * @purpose -> On Document Load Set Event Listeners
 */
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        let nameLength = name.value
        if (nameLength == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).name = name.value;;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const phoneNumber = document.querySelector('#phoneNumber');
    const phoneNumberError = document.querySelector('.phoneNumber-error');
    phoneNumber.addEventListener('input', function() {
        let phoneNumberLength = phoneNumber.value
        if (phoneNumberLength == 0) {
            phoneNumberError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).phoneNumber = phoneNumber.value;;
            phoneNumberError.textContent = "";
        } catch (e) {
            phoneNumberError.textContent = e;
        }
    });

    const zipCode = document.querySelector('#zipCode');
    const zipCodeError = document.querySelector('.zipCode-error');
    zipCode.addEventListener('input', function() {
        let zipCodeLength = zipCode.value
        if (zipCodeLength == 0) {
            zipCodeError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).zipCode = zipCode.value;;
            zipCodeError.textContent = "";
        } catch (e) {
            zipCodeError.textContent = e;
        }
    });

    const address = document.querySelector('#address');
    const addressError = document.querySelector('.address-error');
    address.addEventListener('input', function() {
        let addressLength = address.value
        if (addressLength == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new AddressBook()).address = address.value;;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });

});
