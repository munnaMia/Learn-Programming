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
}

module.exports = Address;
