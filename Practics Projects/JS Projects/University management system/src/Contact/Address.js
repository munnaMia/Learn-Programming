const _id = Symbol("id");
const _roadNo = Symbol("RoadNo");
const _city = Symbol("City");
const _region = Symbol("Region");
const _country = Symbol("Country");
const _postalCode = Symbol("postalCode");

class Address {
  //So lets see a case here in case some isnt provided so in those cases we have to provied empty string so how to avoid it
  //Just give data as objedt and distrature it
  constructor({ id, roadNo, city, region, country, postalCode }) {
    this[_id] = id;
    this[_roadNo] = roadNo || "";
    this[_city] = city || "";
    this[_region] = region || "";
    this[_country] = country || "";
    this[_postalCode] = postalCode || "";
  }

  get id(){
    return this[_id]
  }

  get roadNo(){
    return this[_roadNo]
  }

  set updateRoadNo(value){
    this[_roadNo] = value
  }

  get city(){
    return this[_city]
  }

  set updateCity(value){
    this[_city] = value
  }

  get region(){
    return this[_region]
  }

  set updateRegion(value){
    this[_region] = value
  }

  get country(){
    return this[_country]
  }

  set updateCountry(value){
    this[_country] = value
  }

  get postalCode(){
    return this[_postalCode]
  }

  set updatePostalCode(value){
    this[_postalCode] = value
  }


  toString(){
    return `Road No: ${this[_roadNo]}, City ${this[_city]}, Region: ${this[_region]}, Country: ${this[_country]}, Postalcode: ${this[_postalCode]}`
  }
}

module.exports = Address;
