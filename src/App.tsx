import { BozPay } from "boz.pay.component"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const Payapp: React.FC = () => {

    const search = window.location.search; // Gets the query string
    const params = new URLSearchParams(search);
    
    const [error, setError] = useState(false)

    const data = {
        sandbox: params.get("sandbox") == "yes" ? true : false,
        store: params.get("store") || "",
        id: params.get("id") || "",
        pagseguroTokenSandbox: params.get("pstksb") || "",
        pagseguroToken: params.get("pstk") || "",
        pk: params.get("pk") || "",
    }

    useEffect(() => {
        console.log(data)
        if (!data.pagseguroToken || !data.pagseguroTokenSandbox || !data.store || !data.id || !data.pk) setError(true)
    })

    return (
        <BozPay
            params
            sandbox={data.sandbox}
            pagseguroToken={data.pagseguroToken}
            pagseguroTokenSandbox={data.pagseguroTokenSandbox}
            storeIdentifier={data.store}
            referenceId={data.id}
            creditCardPublicKey={data.pk}
            onPaid={() => {}}
        />
    )
}

const App: React.FC = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="*" element={<Payapp />} />
        </Routes>
    </BrowserRouter>
}

export default App
