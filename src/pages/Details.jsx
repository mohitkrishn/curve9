import AutoScroll from "../components/autoscroll/AutoScroll"

const Details = () => {
    const items = ['Muscles Training', 'Weight Management', 'Personal Training', 'Cardio Sessions', 'Shower Area', 'Epic Body Massage', 'Diet Zone', 'Personal Locker', 'Zumba Classes', 'Online Training'];

    return (
        <section
            className="w-full min-h-screen z-30 bg-zinc-900"
        >
            <AutoScroll items={items} />

            <div
                className="w-full"
            >
                
            </div>
        </section>
    )
}

export default Details