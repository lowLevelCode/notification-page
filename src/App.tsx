import NotificationContainer from "./components/Notification-container";

function App() {
  return (
    <div className="flex items-center justify-center lg:p-8 h-full">
      <div className="bg-white lg:w-2/4 min-h-full rounded-xl shadow p-4 lg:p-6 flex flex-col gap-5">
        <header className="flex justify-between">
          <div className="flex gap-2 items-center">
            <span className="text-2xl font-semibold">Notifications</span>
            <div className="bg-primary_blue text-white w-7 h-6 rounded-md text-center">3</div>
          </div>
          <button className="text-slate-500">Mark all as read</button>
        </header>
        <section>
          <NotificationContainer/>
        </section>
      </div>
    </div>
  );
}

export default App;
