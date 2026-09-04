import { api, LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/experiencecloudimage';

export default class SkillSection extends LightningElement {

    @api skillName1;
    @api skilBarValue1;
    @api skillName2;
    @api skilBarValue2;
    @api skillName3;
    @api skilBarValue3;
    @api skillName4;
    @api skilBarValue4;
    @api skillName5;
    @api skilBarValue5;

    skillimage = Image_Url + '/Experience_Cloud_Project/SkillImage.png';
}