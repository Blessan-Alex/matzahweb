import Image from "next/image";
import Link from "next/link";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Plan Catering for 200 Guests in Kochi",
    "description": "A practical guide to planning catering for large events of 200+ guests in Kochi, Kerala.",
    "step": [
        {
            "@type": "HowToStep",
            "name": "Get Your Menu Math Right",
            "text": "Calculate exact quantities for appetizers, main courses, and desserts. For 200 guests, plan for 2,000-3,000 appetizer pieces, 30-35kg of rice, and a 60% vegetarian split."
        },
        {
            "@type": "HowToStep",
            "name": "Logistics and Timeline Planning",
            "text": "Coordinate a 48-hour countdown for food preparation, finalize equipment like 15-20 chafing dishes, and secure a staff of 12-15 people."
        },
        {
            "@type": "HowToStep",
            "name": "Kochi Specific Tips That Make a Real Difference",
            "text": "Plan for monsoons with covered setups, source local fresh ingredients from Ernakulam markets, and buffer 45 minutes for Kochi traffic delays."
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much food do you need for 200 guests?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For 200 guests, you need approximately 30-35 kg of rice, 25-30 liters of sambar, 16-18 kg of avial, 35-40 kg of biryani, and 20-25 kg of chicken/fish curry. Additionally, plan for 2,000-3,000 appetizer pieces and 30 liters per variety of payasam."
            }
        },
        {
            "@type": "Question",
            "name": "How many staff for catering 200 guests?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For 200 guests, you need 12 to 15 catering staff members. This includes 8-10 servers (1 serving staff per 20-25 guests), 2-3 kitchen helpers, 1 event coordinator, and 1-2 cleanup crew members for a smooth operation."
            }
        }
    ]
};

export default function HowToPlanCateringPost() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <p className="mb-6">
                There is a moment in every event planning journey where the numbers suddenly feel real.
            </p>

            <p className="mb-6">
                You sit down with your guest list. You start counting. Family, friends, colleagues, neighbors, that uncle who always brings three extra people nobody expected. And before you know it, you are staring at a number somewhere around 200 and thinking, "How on earth do we feed all these people?"
            </p>

            <p className="mb-6">
                We get it. We have been there hundreds of times, standing in kitchens at 4 AM, doing the math on rice quantities, counting chafing dishes, coordinating delivery trucks through Kochi traffic during monsoon season. Catering for 200 is not the same as cooking for 20. The stakes are higher. The logistics are trickier. And the margin for error is basically zero, because nobody forgets the wedding where the food ran out.
            </p>

            <p className="mb-6">
                But here is the thing. It does not have to be stressful. With the right planning, the right team, and a solid understanding of how large scale catering actually works, feeding 200 guests can feel surprisingly smooth.
            </p>

            <p className="mb-6">
                This guide breaks it all down. Real numbers. Real timelines. Real lessons from events we have handled across Kochi, Ernakulam, and beyond.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Buffet catering setup for 200 guests at Kochi event" />
            </div>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/corporate-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">
                    Need catering for a large event? Check out our Large Event Catering services in Kochi.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Step One: Get Your Menu Math Right</h2>
            <p className="mb-6">
                This is where most people either overthink or underthink things. Both are dangerous.
            </p>
            <p className="mb-6">
                Overthink it and you end up ordering enough food for 400 people, wasting money and creating mountains of leftovers. Underthink it and you run out of biryani by the third serving round, which is the kind of thing guests talk about for years. Not in a good way.
            </p>
            <p className="mb-6">
                Here is the framework we use when planning menus for 200 guests.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Appetizers and Starters</h3>
            <p className="mb-4">
                Plan for 10 to 15 pieces per guest if you are doing a passed appetizer or starter spread. For 200 guests, that means roughly 2,000 to 3,000 individual pieces across all varieties.
            </p>
            <p className="mb-4">Good options for Kerala events include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Chicken cutlets</strong> or <strong>fish cutlets</strong> (always a crowd favorite in Kochi)</li>
                <li><strong>Paneer tikka</strong> or <strong>gobi manchurian</strong> for vegetarian guests</li>
                <li><strong>Banana bajji</strong> and <strong>parippu vada</strong> for a traditional touch</li>
                <li><strong>Soup stations</strong> if you have the space and setup for it</li>
            </ul>
            <p className="mb-8 italic text-gray-700">
                Mix it up. Three to four varieties is the sweet spot. More than that and your kitchen team gets stretched thin.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Main Course</h3>
            <p className="mb-6">This is where the real planning happens.</p>
            <p className="mb-6">
                For 200 guests, you need to decide on your format first. Are you doing a sit down Sadhya on banana leaves? A buffet with multiple counters? A combination of both?
            </p>
            <p className="mb-6">Here are the quantity guidelines we have refined over years of large events:</p>

            <div className="relative w-full h-[300px] my-8 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_feast.png" fill className="object-cover" alt="Catering quantity planning table for large events Kerala" />
            </div>

            <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse border border-black/10">
                    <thead>
                        <tr className="border-b border-black/10 bg-black/5">
                            <th className="py-4 px-4 font-medium text-gray-900">Item</th>
                            <th className="py-4 px-4 font-medium text-gray-900">Quantity for 200 Guests</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10">
                        <tr><td className="py-3 px-4">Rice (steamed)</td><td className="py-3 px-4">30 to 35 kg</td></tr>
                        <tr><td className="py-3 px-4">Sambar</td><td className="py-3 px-4">25 to 30 liters</td></tr>
                        <tr><td className="py-3 px-4">Rasam</td><td className="py-3 px-4">20 liters</td></tr>
                        <tr><td className="py-3 px-4">Avial</td><td className="py-3 px-4">16 to 18 kg</td></tr>
                        <tr><td className="py-3 px-4">Biryani (if included)</td><td className="py-3 px-4">35 to 40 kg</td></tr>
                        <tr><td className="py-3 px-4">Chicken/Fish curry</td><td className="py-3 px-4">20 to 25 kg</td></tr>
                        <tr><td className="py-3 px-4">Curd/Raita</td><td className="py-3 px-4">15 liters</td></tr>
                        <tr><td className="py-3 px-4">Payasam (per variety)</td><td className="py-3 px-4">30 liters</td></tr>
                        <tr><td className="py-3 px-4">Pappadam</td><td className="py-3 px-4">800 to 1,000 pieces</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-8 italic border-l-4 border-[#D4AF37] pl-4">
                These are not guesses. These come from actual prep sheets we use before events.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Vegetarian Factor</h3>
            <p className="mb-4">
                In Kerala, roughly 50 to 60 percent of guests at most events prefer vegetarian dishes, especially during the Sadhya portion of a wedding. But that ratio shifts depending on the crowd. Corporate events tend to lean heavier on non veg. Family functions vary by community.
            </p>
            <p className="mb-8">
                Our advice: always ask the host for a rough veg to non veg split. If they are unsure, plan for 60 percent vegetarian. Better to have extra veg options than to run short on them, because vegetarian guests notice immediately when their options are limited.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Desserts</h3>
            <p className="mb-4">
                For 200 guests, two to three dessert varieties is ideal. Payasam is non negotiable at any Kerala event. Beyond that, you can add gulab jamun, ice cream, or a fruit counter depending on budget.
            </p>
            <p className="mb-12 font-medium text-[#D4AF37]">
                Pro tip: payasam consumption is always higher than people expect. We have learned to prepare about 20 percent more than the calculated amount. There is something about a good palada pradhaman that makes people come back for a third serving.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Step Two: Logistics and Timeline Planning</h2>
            <p className="mb-6">
                Great food means nothing if it arrives late, cold, or disorganized. For 200 guests, logistics is half the battle.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/composed_hospitality_staff.png" fill className="object-cover" alt="Catering staff setting up for 200 guest corporate event Kochi" />
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The 48 Hour Countdown</h3>
            <p className="mb-6">Here is roughly how we break down the timeline for a 200 guest event:</p>

            <div className="space-y-6 mb-12">
                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2">Two days before:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Final headcount confirmed with host</li>
                        <li>All ingredients sourced and inspected</li>
                        <li>Dry prep begins (cleaning vegetables, soaking lentils, grinding spice pastes)</li>
                        <li>Equipment checklist reviewed</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2">One day before:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Gravies and bases cooked</li>
                        <li>Payasam prepared (some varieties taste better when they rest overnight)</li>
                        <li>Serving equipment packed and loaded</li>
                        <li>Staff assignments finalized</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2">Event day:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Rice cooking starts 4 to 5 hours before service</li>
                        <li>Hot dishes finished 1 to 2 hours before serving</li>
                        <li>Setup team arrives at venue 3 hours early</li>
                        <li>Final plating and arrangement 30 minutes before guests sit down</li>
                    </ul>
                </div>
            </div>

            <p className="mb-8 italic border-l-4 border-[#D4AF37] pl-4">
                This timeline has saved us more times than we can count. When you are feeding 200 people, you simply cannot wing it.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Equipment Needs</h3>
            <p className="mb-4">For a 200 guest event, here is a rough equipment list:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>15 to 20 chafing dishes (depending on menu variety)</li>
                <li>3 to 4 large serving tables</li>
                <li>Serving spoons, ladles, and tongs (at least 30 sets)</li>
                <li>Water dispensers (minimum 4)</li>
                <li>Waste bins strategically placed (often forgotten, always important)</li>
                <li>Handwash stations if outdoors</li>
            </ul>
            <p className="mb-8">
                If the venue does not have a kitchen, you also need portable gas setups, water supply arrangements, and electrical connections for any live counters.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Staffing</h3>
            <p className="mb-4">This one is critical. Understaffing a 200 guest event is a recipe for chaos.</p>
            <p className="mb-4">
                Our rule of thumb: one serving staff member for every 20 to 25 guests. So for 200 guests, you need 8 to 10 servers minimum. Add to that:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>2 to 3 kitchen helpers on site</li>
                <li>1 event coordinator</li>
                <li>1 to 2 cleanup crew members</li>
            </ul>
            <p className="mb-8">
                That is roughly 12 to 15 people on your catering team for a smooth 200 guest operation. It sounds like a lot, but each person has a role, and when the serving rush hits, you will be glad every single one of them is there.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/outdoor-catering-kerala" className="text-[#D4AF37] font-medium hover:underline">
                    See how our team handles large scale events across Kochi and Ernakulam.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Step Three: Kochi Specific Tips That Make a Real Difference</h2>
            <p className="mb-6">
                Catering in Kochi is not the same as catering in Delhi or Bangalore. The climate, the culture, the ingredients, the expectations. Everything is different. Here are a few things we have learned that are specific to planning events in this part of Kerala.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Monsoon proof outdoor catering setup in Kochi Kerala" />
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Plan for the Monsoon</h3>
            <p className="mb-4">
                If your event is between June and September, you need a rain plan. Period. Even if the venue is "mostly covered," monsoon winds in Kochi can push rain sideways under canopies and into open serving areas.
            </p>
            <p className="mb-4">We always recommend:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Fully covered serving zones with side panels</li>
                <li>Non slip mats near food stations</li>
                <li>Backup tarps ready to deploy in minutes</li>
                <li>Hot food kept in insulated containers rather than open chafing dishes during heavy downpours</li>
            </ul>
            <p className="mb-8 italic border-l-4 border-[#D4AF37] pl-4">
                One event last monsoon season, the rain hit about 30 minutes before serving time at a venue near Marine Drive. Because we had already set up covered stations and kept everything in sealed containers, we were able to start serving on time without a single issue. The family did not even realize how close it came to being a problem. That is the whole point of good planning.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Source Local, Source Fresh</h3>
            <p className="mb-4">
                Kochi has incredible access to fresh ingredients, and using them well makes a noticeable difference in food quality.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Banana leaves</strong> from markets in Kanayannur or Thrippunithura. Always buy 10 to 15 percent extra because some tear during transport.</li>
                <li><strong>Coconut</strong> freshly grated from local suppliers. Never use desiccated coconut for a Sadhya. Guests can tell.</li>
                <li><strong>Seafood</strong> from the morning catch if your menu includes fish or prawns. Fort Kochi and Vypin markets are our go to spots.</li>
                <li><strong>Vegetables</strong> from Ernakulam Market or direct from farms in Aluva for larger orders.</li>
            </ul>
            <p className="mb-8 font-medium">
                Fresh local ingredients are not just better tasting. They are often cheaper than imported or packaged alternatives, especially when you are buying in bulk for 200 people.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Traffic and Delivery Timing</h3>
            <p className="mb-4">
                Anyone who has driven through Kochi during peak hours knows the struggle. MG Road congestion, Edappally junction bottlenecks, the bridge crossings. If your event is in a busy part of the city, add at least 45 minutes of buffer to your delivery timeline.
            </p>
            <p className="mb-8">
                We usually schedule our transport to arrive at venues by 8 to 9 AM for afternoon events, even if setup does not start until 10. It is always better to be early and wait than to be stuck behind a container truck on NH 66 while 200 guests are wondering where lunch is.
            </p>

            <div className="bg-black/5 p-8 rounded-xl border border-black/10 mb-12">
                <h3 className="text-2xl font-medium text-[#D4AF37] mb-4">A Recent Event That Brought It All Together</h3>
                <p className="mb-4">
                    A few months ago, we catered a corporate product launch at Infopark, Kochi. The brief was straightforward: 250 guests, buffet format, mix of Kerala and North Indian, two hour serving window.
                </p>
                <p className="mb-4">
                    What made it challenging was the venue layout. The serving area was on a different floor from the kitchen staging zone, and there was only one service elevator. So we had to stagger our food transport in waves, keeping hot items in insulated carriers and timing each batch so that the buffet line never looked empty.
                </p>
                <p className="mb-4 font-medium text-gray-900">
                    The result? Smooth, continuous service for the full two hours. Not a single guest waited more than a minute. The client called the next day to book us for their annual conference.
                </p>
                <p className="italic text-gray-700">
                    That kind of experience only comes from doing this over and over again and learning something new every time.
                </p>
            </div>

            <h2 className="text-3xl mt-16 mb-6">A Quick Checklist Before You Book</h2>
            <p className="mb-6">
                If you are planning a 200 guest event in Kochi, run through this list before you finalize anything:
            </p>
            <div className="bg-black/5 p-6 rounded-lg mb-8">
                <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Final guest count confirmed (with a 10 to 15 percent buffer)</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Veg to non veg ratio discussed with your caterer</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Venue kitchen facilities assessed (or portable setup planned)</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Rain and weather backup in place</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Serving staff count agreed upon</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Delivery and setup timeline locked in</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Tasting session completed (always do a tasting before a big event)</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Payment terms and cancellation policy understood</li>
                </ul>
            </div>
            <p className="mb-12 italic border-l-4 border-[#D4AF37] pl-4">
                This checklist is not exhaustive, but it covers the things that go wrong most often. If you have all of these locked down, you are already ahead of 90 percent of event planners.
            </p>

            <div className="mt-16 bg-black/5 border border-[#D4AF37]/30 rounded-2xl p-10 text-center">
                <h3 className="text-3xl mb-4 text-[#D4AF37]">Let Us Handle the Heavy Lifting</h3>
                <p className="mb-4 text-lg">Feeding 200 people well is a craft. It takes experience, systems, good ingredients, and a team that genuinely cares about getting every detail right. We have spent years building all of that at Matzah Caterers, and we bring it to every single event, whether it is a wedding in Ernakulam, a corporate function at Infopark, or a family celebration in Tripunithura.</p>
                <p className="mb-8 text-lg">If you have a 200 plus guest event coming up and you want to stop worrying about the food, let us talk.</p>
                <p className="mb-6 font-medium text-xl text-gray-900">Get a custom quote from Matzah Caterers today.</p>
                <p className="font-medium text-lg">
                    📞 <Link href="tel:+918921038043" className="text-[#D4AF37] hover:underline">Call us</Link> or 📩 <Link href="/contact" className="text-[#D4AF37] hover:underline">Send us your event details</Link> and we will get back to you within 24 hours.
                </p>
            </div>
        </>
    );
}
