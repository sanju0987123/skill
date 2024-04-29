import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import { PaymentProvider } from "services/Paymentcontext";

function App() {
  return (
    <ProSidebarProvider>
      <PaymentProvider>
        <Routes/>
      </PaymentProvider>
      
    </ProSidebarProvider>
  );
}

export default App;
