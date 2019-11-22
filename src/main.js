import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorFind} from './doctorFind.js';


$(document).ready(function() {
  $('#searchSubmit').submit(function(event){
    event.preventDefault();

    (async () => {
      let doctorFindInfo = new DoctorFind();
      const response = await doctorFindInfo.getDoctorInfo();
      getDoctorElement(response);
    })();

    const getDoctorElement = (response) => {
      $('#doctorSearch').text(response.data[0].profile.first_name);
      console.log(response);
    };
  });
});
