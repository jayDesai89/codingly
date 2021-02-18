import { Observable } from 'rxjs';
import { of } from 'rxjs/operators';

// App Service
// =========================================

interface ICustomerName {
  first: string,
  last: string
}
interface ISomeResponse {
  customerName: ICustomerName,
  age: number
}
const sampleResponse = {
  customerName: {
    first: 'Johny',
    last: 'Bravo'
  },
  age: 21
}

// 1.
// complete `functionOne`: fix the body of the function to return the correct type
const functionOne = (a: ISomeResponse) : string => ''


// 2.
// write the function `a` such that it returns the correct type when `functionTwo` is executed

const functionTwo = (a: (x: ISomeResponse) => string) : string => a(b)




// 3.
// complete `functionThree`: write the body of the function the returns the correct type
const functionThree = (b: string, a: number) : Observable<[string, number]> => ?




// 4.
// complete the function below: write the body of the function that returns the correct type
const functionFive = (a: number) : Observable<ICustomerName> => of({first: '', last: ''})








// App Component
// ============================================

const customerName = functionTwo(functionOne);
const customerNameAndAge$ = functionThree(customerName, sampleResponse.age);
