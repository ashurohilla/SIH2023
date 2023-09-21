const generatePDF = async (name, date, sex, age, city, id, medicine)=>{
    const {PDFDocument, rgb} = PDFLib;

    const exBytes = await fetch("./assets/pdf/SIH.pdf").then(res => res.arrayBuffer());
    const pdfdocs = await PDFDocument.load(exBytes);
    
    const exFont = await fetch("./PatrickHand-Regular.ttf").then(res => res.arrayBuffer());
    pdfdocs.registerFontkit(fontkit);    
    const myFont = await pdfdocs.embedFont(exFont);

    const pages = pdfdocs.getPages();
    const firstPg = pages[0];


    firstPg.drawText(name,{
        x:115,  // ->
        y:1060,  //  ^
        size: 25,
        font: myFont
    })
    
    firstPg.drawText(date,{
        x:650,  // ->
        y:1060,  //  ^
        size: 25,
        font: myFont
    })
    firstPg.drawText(sex,{
        x:90,  // ->
        y:1010,  //  ^
        size: 25,
        font: myFont
    })
    firstPg.drawText(age,{
        x:290,  // ->
        y:1010,  //  ^
        size: 25,
        font: myFont
    })
    firstPg.drawText(city,{
        x:490,  // ->
        y:1010,  //  ^
        size: 25,
        font: myFont
    })
    firstPg.drawText(id,{
        x:680,  // ->
        y:1010,  //  ^
        size: 25,
        font: myFont
    })
// Draw medicine data on the page
let medicineY = 850; // Starting Y position for medicine data (changed from const to let)
const medicineSpacing = 30; // Spacing between medicine items
medicine.forEach((medicineItem) => {
    firstPg.drawText(medicineItem, {
        x: 50, // X position
        y: medicineY, // Y position
        size: 25,
        font: myFont,
    });
    medicineY -= medicineSpacing; // Adjust the Y position for the next medicine item
});

    // Generate the QR code for ID
    var qrCodeData = new QRious({
        element: document.getElementById("qrcode-2"),
        background: '#ffffff',
        backgroundAlpha: 1,
        foreground: '#004AAD',
        foregroundAlpha: 1,
        level: 'H',
        padding: 0,
        size: 128,
        value: id
      });

    // Create an image from the QR code data
    // const qrImage = await pdfdocs.embedPng(qrCodeData);
    const imageDataURL = qrCodeData.toDataURL('image/png'); // You can choose the image format (e.g., 'image/png' or 'image/jpeg')
    const image = await pdfdocs.embedPng(imageDataURL);


    // Draw the QR code on the page
    firstPg.drawImage(image, {
        x: 640,
        y: 880,
        width: 100,
        height: 100,
    });

 


    const uri = await pdfdocs.saveAsBase64({dataUri:true}); 
    saveAs(uri,name, { autoBom : true });
    document.getElementById("certificates").src=uri;
}

document.getElementById("submit").addEventListener("click",()=>{
        var name = document.getElementById("name").value;
        var date = document.getElementById("date").value;
        var sex = document.getElementById("sex").value;
        var age = document.getElementById("age").value;
        var city = document.getElementById("city").value;
        var id = document.getElementById("id").value;
        // Collect data from medicine input fields
        const medicineInputs = document.querySelectorAll('input[name="medicine"]');
        const medicineData = Array.from(medicineInputs).map((input) => input.value);
        generatePDF(name, date, sex, age, city, id, medicineData);    
})

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("name").value="";
})
