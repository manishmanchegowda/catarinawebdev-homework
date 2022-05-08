// Add your code here

let newdiv = document.createElement("div");
newdiv.style.height = "400px";
newdiv.style.weight = "400px";
newdiv.style.padding = "30px";
document.body.append(newdiv);

let pic = document.createElement("img");
pic.src = "IMG_9931.jpg";
pic.alt = "Profile Picture";
pic.style.width = "200px";
pic.style.height = "200px";
pic.style.borderRadius = "50%";
pic.style.display = "block";
pic.style.margin = "0 auto";
newdiv.appendChild(pic);

let para = document.createElement("p");
para.textContent = `My name is Manish Manchegowda (He/Him),`;
para.style.fontWeight = "bold";
para.style.textAlign = "center";
newdiv.appendChild(para);

let para1 = document.createElement("p");
para1.textContent = `currently a graduate student at PSU. I am from Mandya a small town in India. 
I love playing video games like Apex Legends and Rainbow six siege. In my free time I do cycling and hiking.`;
para1.style.textAlign = "center";
newdiv.appendChild(para1);