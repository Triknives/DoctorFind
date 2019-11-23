import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorFind} from './doctorFind.js';


$(document).ready(function() {
  $('#searchSubmit').submit(function(event){
    event.preventDefault();


    const name =$("#nameInput").val();

    (async () => {
      let doctorFindInfo = new DoctorFind();
      const response = await doctorFindInfo.getDoctorInfo(name);
      getDoctorElement(response);
    })();

    const getDoctorElement = (response) => {
      $('#nameSearch').text(" " + response.data[0].profile.first_name +" "+ response.data[0].profile.last_name);
      $('#contactNumber').text(" " +response.data[0].practices[0].phones[0].number);
      $('#address').text(" " +response.data[0].practices[0].visit_address.street);
      $('#acceptingClients').text(" " +response.data[0].practices[0].accepts_new_patients);

      //Below is branch logic to provide user within information on whether a website is available for the doctor.
      if (response.data[0].practices[0].website === undefined){
        return $('#website').text(" " + "Sorry, they don't appear to have a website!");
      }else
       $('#website').text(" " + response.data[0].practices[0].website);
    };
  });
});
