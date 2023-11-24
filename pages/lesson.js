<<<<<<< Updated upstream
import Link from "next/link";
import Image from "next/image";
export default function Lesson(){
    return<div>
        <Link href={"/"}><button className="button mt-4 mb-2 ms-3 ">X</button></Link> 
        <div className="sub_one grid grid-cols-1 gap-4 mb-5 ms-5 mt-5">
            <Image src="/image_1.jpg"
            width={500}
            height={500}
            />
        </div>
        <p className="sub_two ">Essentials (50%):
            Allocate about 50% of your income to cover essential expenses like groceries, bills, rent or mortgage, debt payments, and insurance.
            Transfer this money to a separate account immediately to ensure your basic needs are covered.

            Savings and Debt (20%):
            Dedicate 20% of your income to savings and paying down debt.
            Initially, focus on building an emergency fund before addressing credit card balances.

            Remaining 30%:
            Use the remaining 30% of your income as discretionary spending.
            Do not track expenses in this category, but prioritize saving and spending based on your financial goals.
            </p>
        <div className="sub_three">
            
        </div>
        
       <center><Link href={"/"}><button className="  button mt-4 mb-5 ms-4 ">Continue</button></Link></center>
=======
export default function Lesson() {
  return (
    <div className="container-fluid main_sub">
      <button className="btn btn-danger mt-2 mb-3 rounded-0">X</button>
      <div className="container main rounded-3"></div>
      <div className="row m-3">
        <div className="col-sm-12 mb-3 card me-2 shadow-lg rounded-0  border  border-2 border-danger">
          <div className="card-body pt-0 text-warning bg-white ">
            <h5 className="ps-0">INFORMATIONS: </h5>
          </div>
        </div>
        <div className="col-sm-12 card bg-secondary shadow-lg rounded-0 border border-2  border-danger ">
          <div className="card-body text-dark">
            <h5 className="ps-0 pt-0">Tips: </h5>
          </div>
        </div>
      </div>

      <button type="button">Continue</button>
>>>>>>> Stashed changes
    </div>
  );
}
