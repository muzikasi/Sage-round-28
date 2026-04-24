#include <iostream>

using namespace std;


int main (){
	
double grade;

   cout<<"Enter your grade: ";
   cin>>grade;
   
   if (grade>=90){
   	cout<<"A+";
   }else if (grade>=85){
   	
   	cout <<"A";
   }else if (grade>=80){
   
   	cout <<"A-";
   	
   }else if (grade>=70){
   	
   	cout <<"B";
	
}  else if (grade>=60){
   	
   	cout <<"C";
   	}else  {
   	
   	cout <<"F";
}
   
	return 0;
}