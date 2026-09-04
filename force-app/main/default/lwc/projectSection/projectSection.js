import { LightningElement } from 'lwc';
import Image_url from '@salesforce/resourceUrl/experiencecloudimage';

export default class ProjectSection extends LightningElement {

    projectImage = Image_url + '/Experience_Cloud_Project/ProjectImage.jpg';
    
    projectData = [
        {
            id:1,
            name:'Customer Portal',
            description:'Self service portal built in Experience cloud using custom LWC, Apex, javascript',
            technology:'Salesforce, LWC, Apex, Triggers, JavaScript, Experience Cloud, Integration',
            website:'www.google.com'
        },
        {
            id:2,
            name:'Portfolio',
            description:'Self service portal built in Experience cloud using custom LWC, Apex, javascript',
            technology:'Salesforce, LWC, Apex, Triggers, JavaScript, Experience Cloud, Integration',
            website:'www.google.com'
        }
    ]
}