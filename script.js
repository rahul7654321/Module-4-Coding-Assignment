var names=new Array();
names[0]="Rahul";
names[1]="John";
names[2]="Jeo";
names[3]="jason";
names[4]="pani";
names[5]="frank";
names[6]="larn";
names[7]="paula";
names[8]="laura";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}