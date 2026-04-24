#include <iostream>

using namespace std;

string calcGrade(double grade){
	
	if (grade>=90){
   	 return "A+";
   }else if (grade>=85){
   	
   	return"A";
   }else if (grade>=80){
   
   	return"A-";
   	
   }else if (grade>=70){
   	
   	return"B";
	
}  else if (grade>=60){
   	
   	return"C";
   	}else  {
   	
   	return"F";
}
}


int main (){
	
 int abebeScore;
 int kebedScore;

   cout<<"Enter your Abebe Score: ";
   cin>>abebeScore;
   
   cout<<"Enter your Kebede Score: ";
   cin>>kebedScore;
   
    cout<<"Abebe Grade: "<<calcGrade(abebeScore)<<endl;
    cout<<"Kebed Grade: "<<calcGrade(kebedScore)<<endl;
   
   
	return 0;
}