#include <iostream>

using namespace std;

    int sum (int x, int y){
    	 return x+y;
	}
	
	double c_to_f(int c){
		
		double f=(c*1.8)+32;
		return f;
	}

int main (){

    int output;
    
     output = sum(10,11);

   cout<<output<<endl;
   
   cout<<"=========== C to F ============"<<endl;
   
   cout<<"c to  f: "<<c_to_f(12)<<endl;
   cout<<"c to  f: "<<c_to_f(100)<<endl;
   
	return 0;
}