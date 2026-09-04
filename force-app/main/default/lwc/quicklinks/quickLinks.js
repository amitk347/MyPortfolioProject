import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/experiencecloudimage';
import { NavigationMixin } from 'lightning/navigation';

export default class QuickLinks extends NavigationMixin(LightningElement) {
    data = [
    {
        id: 1,
        image: Image_Url + '/Experience_Cloud_Project/Projects.jpg',
        text: 'Projects',
        url: '/projects'  // The URL path of your page in Experience Builder
    },
    {
        id: 2,
        image: Image_Url + '/Experience_Cloud_Project/Skills.jpg',
        text: 'Skills',
        url: '/skills'
    },
    {
        id: 3,
        image: Image_Url + '/Experience_Cloud_Project/Certifications.jpg',
        text: 'Certifications',
        url: '/certifications'
    }
];

    handleClick(event) {
    // 1. Safely read dataset ID (fallback to target if currentTarget is lost)
    const rawId = event.currentTarget?.dataset?.id || event.target?.closest('[data-id]')?.dataset?.id;
    
    console.log('Raw Clicked ID:', rawId);

    if (!rawId) {
        console.warn('No data-id found on clicked element.');
        return;
    }

    // 2. Loose equality (==) avoids type mismatch (string vs number)
    const selectedItem = this.data.find(item => item.id == rawId);

    console.log('Selected Item Found:', selectedItem);

    // 3. Perform navigation only if the item and page exist
    if (selectedItem && selectedItem.url) {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: selectedItem.url
            }
        });
    }
}
}