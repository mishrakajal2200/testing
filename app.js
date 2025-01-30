const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.json());

const userDetails = {
    "userId": "user123",
    "companyName": "Example Company",
    "name": "John Doe",
    "designation": "CEO",
    "contact1": "+1234567890",
    "contact2": "+0987654321",
    "whatsapp1": "+1234567890",
    "whatsapp2": "+0987654321",
    "email": "john.doe@example.com",
    "website": "https://example.com",
    "googleMap": "http://maps.google.com/?ie=UTF8&hq=&ll=35.028028,-106.536655&z=13https://www.google.com/maps/search/?api=1&query=123+Main+Street,Example+City,Country",
    "address": "123 Main Street, Example City, Country",
    "logo": "https://t4.ftcdn.net/jpg/05/91/46/79/360_F_591467901_e7ms8sNwL0peaO96kc7vCLVJlVtdC0AJ.jpg",
    "socialMediaLinks": {
        "facebook": "https://facebook.com/example",
        "instagram": "https://instagram.com/example",
        "linkedin": "https://linkedin.com/company/example",
        "twitter": "https://twitter.com/example",
        "youtubeChannel": "https://youtube.com/channel/UCexample",
        "googleBusiness": "https://business.google.com/example",
        "otherProfile": "https://otherprofile.com/example",
        "youtubeVideos": [
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
            "https://www.youtube.com/watch?v=exampleVideo2"
        ]
    },
    "aboutCompany": {
        "establishedYear": "2000",
        "natureOfBusiness": "Retail",
        "gstNumber": "1234567890ABCDE",
        "documents": [
            "https://www.example.com/docs/document1.pdf",
            "https://www.example.com/docs/document2.pdf"
        ]
    },
    "bankDetails": {
        "bankName": "Example Bank",
        "accountNumber": "123456789012345",
        "branchName": "Example Branch",
        "ifscCode": "IFSC1234",
        "accountHolderName": "John Doe",
        "gPayNumber": "+1234567890",
        "paytmNumber": "+0987654321",
        "phonePeNumber": "+1122334455",
        "upiId": "john@upi",
        "accountType": "Savings",
        "qrImages": [
            "https://picsum.photos/id/1/200/300",
            "https://picsum.photos/id/1/200/300"
        ]
    },
    "products": [
        {
            "productName": "Sample Product 1",
            "productPrice": 100,
            "productType": "product",
            "productImages": [
                "https://shahnn.com/wp-content/uploads/2022/02/Split-Pigeon-Pea-1-scaled-e1645002383924.jpg",
            ]
        },
        {
            "productName": "Sample Service 1",
            "productPrice": 200,
            "productType": "service",
            "productImages": [
                "https://5.imimg.com/data5/SELLER/Default/2023/4/302123277/IX/OA/DO/159886536/organic-toor-dal-1000x1000.jpg"
            ]
        }
    ],
    "galleryImages": [
        "https://5.imimg.com/data5/SELLER/Logo/2022/10/GX/WZ/SN/29643016/logo.jpeg",
        "https://cdn.dribbble.com/users/9185061/screenshots/16600187/agriculture_logo_design_free_downlaod_4x.jpg"
    ]
};

const logoUrl = userDetails.logo;
const updatedDocuments = userDetails.aboutCompany.documents; 
const updatedProducts = userDetails.products.map(product => ({
    productName: product.productName,
    productPrice: product.productPrice,
    productType: product.productType,
    productImages: product.productImages 
}));

const companyData = {
    userName: userDetails.name,
    email: userDetails.email,
    companyName: userDetails.companyName,
    designation: userDetails.designation,
    contact1: userDetails.contact1,
    contact2: userDetails.contact2,
    contacts: [userDetails.contact1, userDetails.contact2].filter(Boolean), 
    whatsapp1: userDetails.whatsapp1,
    whatsapp2: userDetails.whatsapp2,
    Watsapps: [userDetails.whatsapp1, userDetails.whatsapp2].filter(Boolean),
    website: userDetails.website,
    googleMap: userDetails.googleMap,
    location: userDetails.address,
    logoUrl,
    establishmentYear: userDetails.aboutCompany.establishedYear,
    businessNature: userDetails.aboutCompany.natureOfBusiness,
    gstNo: userDetails.aboutCompany.gstNumber,
    documents: updatedDocuments, 
    bankName: userDetails.bankDetails.bankName,
    accountNo: userDetails.bankDetails.accountNumber,
    branchName: userDetails.bankDetails.branchName,
    ifscCode: userDetails.bankDetails.ifscCode,
    accountHolderName: userDetails.bankDetails.accountHolderName,
    gpayNo: userDetails.bankDetails.gPayNumber,
    paytmNo: userDetails.bankDetails.paytmNumber,
    phonePayNo: userDetails.bankDetails.phonePeNumber,
    upiId: userDetails.bankDetails.upiId,
    accountType: userDetails.bankDetails.accountType,
    qrImages: userDetails.bankDetails.qrImages, 
    products: updatedProducts,
    galleryImages: userDetails.galleryImages,
    socialMediaLinks: userDetails.socialMediaLinks,
    videoUrl: userDetails.socialMediaLinks.youtubeVideos, 
    googleBusiness: userDetails.socialMediaLinks.googleBusiness 
};

app.get('/', (req, res) => {
    fs.readFile('./views/index.ejs', 'utf-8', (err, templateContent) => {
        if (err) {
            return res.status(500).send("Error reading the template file");
        }

        const renderedTemplate = ejs.render(templateContent, companyData);

        res.send(renderedTemplate);
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
