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
      response.data[0];
      $('#nameSearch').text(" " + response.data[0].profile.first_name +" "+ response.data[0].profile.last_name);
      $('#contactNumber').text(" " +response.data[0].practices[0].phones[0].number);
      $('#address').text(" " +response.data[0].practices[0].visit_address.street);
      $('#acceptingClients').text(" " +response.data[0].practices[0].accepts_new_patients);
      if (response.data[0].practices[0].website === undefined){
        return $('#website').text(" " + "Sorry, they don't appear to have a website!");
      }else
      $('#website2').text(" " + response.data[1].practices[0].website);


      
      //Below will display doctor number 2 within search array.
      $('#nameSearch2').text(" " + response.data[1].profile.first_name +" "+ response.data[1].profile.last_name);
      $('#contactNumber2').text(" " +response.data[1].practices[0].phones[0].number);
      $('#address2').text(" " +response.data[1].practices[0].visit_address.street);
      $('#acceptingClients2').text(" " +response.data[1].practices[0].accepts_new_patients);
      if (response.data[1].practices[0].website === undefined){
        return $('#website2').text(" " + "Sorry, they don't appear to have a website!");
      }else
      $('#website2').text(" " + response.data[1].practices[0].website);
    };
  });
});
