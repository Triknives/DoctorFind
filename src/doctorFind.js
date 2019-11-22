export class DoctorFind {
  constructor (location, query) {
      this.city = city;
      this.query = query;
  }

  async getDoctorInfo() {
    try {
      let response = await fetch(`https://api.betterdoctor.com?api_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
