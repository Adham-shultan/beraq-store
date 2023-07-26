import TransactionContent from "../../../components/organisms/TransactionContent";
import SideBar from "../../../components/organisms/SideBar";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent/>
    </section>
  )
}
