#include <iostream>

using namespace std;

int main () {
	
	int  a=50 , b=50;
	
	bool grater = a>b;
	bool leasthan = a<b;
	bool leathanOrEqual = a<=b;
	bool graterthanOrEqual = a>=b;
	bool Equal = a==b;
	bool NotEqual = a!=b;
	
	cout<<"A: " <<a<< " B: "<<b<<endl;
	cout<<"Greaterthan: "<<grater<<endl;
	cout<<"leasthan: "<<leasthan<<endl;
	cout<<"leathanOrEqual: "<<leathanOrEqual<<endl;
	cout<<"graterthanOrEqual: "<<graterthanOrEqual<<endl;
	cout<<"Equal: "<<Equal<<endl;
	cout<<"NotEqual: "<<NotEqual<<endl;
	
	bool LogicalOprateros = true || false;
    
	cout<<"LogicalOprateros: "<<LogicalOprateros<<endl;	
	return 0;
}