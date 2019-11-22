export class DoctorFind {
  async getDoctorInfo() {
    try {
      let response = await fetch(``);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
