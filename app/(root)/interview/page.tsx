
import Agent from "@/components/Agent";
import {getCurrentUser} from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview Generation</h3>

            <Agent userName={user?.name || "Guest"} userId={user?.id || "unknown"} type="generate" />
        </>
    )
}
export default Page;