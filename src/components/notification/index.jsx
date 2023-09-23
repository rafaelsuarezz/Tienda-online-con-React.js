import React, {useContext} from'react';

function Notification() {

    const {openNotification} = useContext(Context);

    return (
        <div className={`flexjustify-centeritems-centerm-autorounded-lgz-10fixedw-fulltransition-allduration-300 ${openNotification ? "top-0": "top-[-200px]"}`}>
            <h2 className={`p-3rounded-lgtext-whitemt-20bg-zinc-900text-xl `}>Item has been added to the cart ✅</h2>
        </div>
    )
}

export default Notification