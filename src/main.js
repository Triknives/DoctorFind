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
    };
  });
});
