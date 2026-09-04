import { LightningElement } from 'lwc';
import Image_url from '@salesforce/resourceUrl/experiencecloudimage';
export default class CertificationSection extends LightningElement {

    certificationData = [
        {
            id:1,
            name:'Admin',
            issued_date:'March 20, 2022',
            certId:'1209549',
            image:Image_url + '/Experience_Cloud_Project/Admin.png'
        },
        {
            id:2,
            name:'Platform Developer 1',
            issued_date:'January 16, 2022',
            certId:'1183025',
            image:Image_url + '/Experience_Cloud_Project/Pd1.png'
        },
        {
            id:3,
            name:'JavaScript Developer 1',
            issued_date:'February 19, 2023',
            certId:'3025663',
            image:Image_url + '/Experience_Cloud_Project/JS1.png'
        }
    ]
}