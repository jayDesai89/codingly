import { Observable } from 'rxjs';

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
// complete `functionOne`: fix the body of the function to return the correct value and type

const functionOne = (a: ISomeResponse) : string => ?


const functionTwo = (a: (x: ISomeResponse) => string) : string => a(b)


// 2.
// complete `functionThree`: write the body of the function to return the correct value based on App Component expectations

const functionThree = (b: string, a: number) : Observable<[string, number]> => ?


// 3.
// complete the function below: write the body of the function that returns the correct type

const functionFive = (a: ISomeResponse) : Observable<ICustomerName> => ?








// App Component
// ============================================

const customerName = functionTwo(functionOne); // => Johny Bravo
this.customerNameAndAge$ = functionThree(customerName, sampleResponse.age); // => Johny Bravo, 21
