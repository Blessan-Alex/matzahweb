import Image from "next/image";
import Link from "next/link";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does corporate catering cost in Kochi?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Corporate catering costs in Kochi vary based on the format. A traditional Kerala heritage menu typically ranges from Rs. 700 to Rs. 1,000 per person. Global mini-plates average Rs. 900 to Rs. 1,400. Individual packed working lunch boxes range from Rs. 300 to Rs. 550 per person depending on the inclusions."
            }
        },
        {
            "@type": "Question",
            "name": "What food is best for corporate events?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The best food depends on the event style. For seminars or conferences, working lunch boxes or a balanced buffet with light options work well. For team outings, interactive setups like build-your-own bowls or a single premium dish (like authentic Thalassery biryani) are great. For high-end client events, curated global mini-plates offer a premium experience."
            }
        },
        {
            "@type": "Question",
            "name": "Do you deliver to Infopark and Smartcity?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Matzah Caterers regularly delivers to corporate parks across the Kakkanad tech belt, including Infopark and Smartcity. We handle strict schedule coordination and accommodate diverse dietary requirements for large multi-community workforces."
            }
        }
    ]
};

const menuSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kerala Heritage Corporate Menu Example",
    "description": "A sample corporate catering menu featuring authentic traditional Kerala dishes tailored for corporate events.",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@type": "MenuItem",
                "name": "Welcome Drinks",
                "description": "Fresh tender coconut water, Sambaram (spiced buttermilk), Nannari sherbet"
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@type": "MenuItem",
                "name": "Starters",
                "description": "Parippu vada, Uzhunnu vada, Chicken cutlet, Banana bajji"
            }
        },
        {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "@type": "MenuItem",
                "name": "Vegetarian Mains",
                "description": "Kerala matta rice, Sambar, Rasam, Avial, Thoran, Olan, Erissery"
            }
        },
        {
            "@type": "ListItem",
            "position": 4,
            "item": {
                "@type": "MenuItem",
                "name": "Non-Vegetarian Mains",
                "description": "Meen curry (fish curry), Nadan kozhi curry (country chicken), Prawn roast"
            }
        },
        {
            "@type": "ListItem",
            "position": 5,
            "item": {
                "@type": "MenuItem",
                "name": "Breads & Live Counters",
                "description": "Parotta, Appam, Dosa station with 3 chutneys"
            }
        },
        {
            "@type": "ListItem",
            "position": 6,
            "item": {
                "@type": "MenuItem",
                "name": "Desserts",
                "description": "Palada pradhaman, Ada pradhaman, Fresh fruit"
            }
        }
    ]
};

export default function CorporateEventCateringPost() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Matzah Caterers",
                        "url": "https://matzahcaterers.in",
                        "areaServed": [
                            {
                                "@type": "City",
                                "name": "Kochi"
                            },
                            {
                                "@type": "City",
                                "name": "Ernakulam"
                            }
                        ]
                    })
                }}
            />

            <p className="mb-6">Here is a scene that plays out at corporate events across Kochi almost every week.</p>

            <p className="mb-6">
                A company books a conference room. They bring in a caterer. The food arrives. Veg fried rice, gobi manchurian, paneer butter masala, gulab jamun. The same four dishes that showed up at the last team meeting. And the one before that. And probably the one before that too.
            </p>

            <p className="mb-6">
                People eat because they are hungry. Nobody talks about the food afterward. Nobody remembers it. It is just there, filling a gap between presentations and breakout sessions.
            </p>

            <p className="mb-6">Now here is a different scene.</p>

            <p className="mb-8">
                Same conference room. Same company. But this time, the catering setup includes a live Kerala breakfast counter with fresh appam and stew being made on the spot. A small Malabar biryani station where each plate is scooped out of a giant dum pot. A dessert corner with three varieties of payasam in traditional brass uruli bowls. Suddenly, people are not just eating between sessions. They are gathering around the food. They are talking to each other. They are posting photos. The food becomes part of the event experience instead of an afterthought.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_buffet.png" fill className="object-cover" alt="Corporate event buffet catering setup at Kochi tech park" />
            </div>

            <p className="mb-6">
                That is the difference between "ordering lunch for the office" and actually thinking about corporate event catering. And in a city like Kochi, where the food culture is this rich and diverse, there is absolutely no reason to settle for the first version.
            </p>

            <p className="mb-8">
                This guide covers everything we have learned about catering corporate events in Kochi. The formats that work, the menus that impress, the logistics that keep things smooth, and the ideas that turn a regular work event into something people genuinely enjoy.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/corporate-catering" className="text-[#D4AF37] font-medium hover:underline">
                    Looking for corporate catering in Kochi? Explore our Corporate Event Catering services.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Understanding What Corporate Events Actually Need</h2>

            <p className="mb-6">
                Before we talk about menus and food stations, there is something important to understand. Corporate events are fundamentally different from weddings and family celebrations. The priorities are different. The constraints are different. And the way people eat at a work event is nothing like how they eat at a weekend family function.
            </p>

            <p className="mb-6">Here is what matters most at a corporate event:</p>

            <ul className="space-y-4 mb-8 list-none">
                <li><strong className="text-[#D4AF37]">Time efficiency.</strong> People are at a work event. There is usually an agenda. Lunch is often scheduled for 30 to 45 minutes, not two hours. The food needs to be accessible quickly, served efficiently, and eaten without too much fuss. Long buffet queues are a problem. Complicated serving formats slow things down.</li>
                <li><strong className="text-[#D4AF37]">Diverse dietary needs.</strong> A corporate guest list in Kochi today includes Malayalis, Tamils, North Indians, people from other countries, vegetarians, non vegetarians, people with allergies, people who are fasting, and people who only drink black coffee. You cannot serve a single cuisine and expect it to work for everyone.</li>
                <li><strong className="text-[#D4AF37]">Professional presentation.</strong> The food setup is part of the event atmosphere. Messy buffet tables with dripping gravy and crushed pappadam do not exactly scream "well organized company." The presentation needs to match the professionalism of the event itself.</li>
                <li><strong className="text-[#D4AF37]">Budget accountability.</strong> Corporate budgets have approval chains. Someone is signing off on the catering spend, and they want to know they got value for money. This does not mean cheap. It means smart. Every rupee should show up in the food quality and experience, not disappear into unnecessary frills.</li>
            </ul>

            <p className="mb-12">With those priorities in mind, here is how to build a corporate catering plan that actually works.</p>

            <h2 className="text-3xl mt-16 mb-6">Menu Ideas That Go Beyond the Standard</h2>

            <p className="mb-8">
                The single biggest improvement you can make to corporate event catering is breaking out of the default menu. That standard veg and non veg buffet with fried rice and butter chicken is fine. It is safe. But safe is also forgettable. Here are menu formats and specific ideas that we have seen work brilliantly at corporate events across Kochi.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4">The Kerala Heritage Menu</h3>

            <p className="mb-6">
                This is our personal favorite for Kochi corporate events, and it tends to surprise guests in the best way. Instead of a generic Indian buffet, lean into Kerala's food identity. Many corporate guests, especially those visiting from other cities or countries, have never experienced authentic Kerala cuisine at a work event. Giving them that experience creates a memorable moment and reflects well on the company hosting it.
            </p>

            <div className="relative w-full h-[350px] mb-8 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_feast.png" fill className="object-cover" alt="Kerala heritage lunch menu spread for corporate event Kochi" />
            </div>

            <p className="font-medium text-[#D4AF37] mb-4">Sample Kerala Heritage Menu for 100 guests:</p>

            <div className="overflow-x-auto mb-6 bg-black/5 rounded-xl border border-black/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#D4AF37]/10 text-[#D4AF37]">
                            <th className="p-4 border-b border-black/10 font-medium">Course</th>
                            <th className="p-4 border-b border-black/10 font-medium">Items</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm md:text-base">
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Welcome drinks</td>
                            <td className="p-4 border-b border-black/5">Fresh tender coconut water, Sambaram (spiced buttermilk), Nannari sherbet</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Starters</td>
                            <td className="p-4 border-b border-black/5">Parippu vada, Uzhunnu vada, Chicken cutlet, Banana bajji</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Mains (veg)</td>
                            <td className="p-4 border-b border-black/5">Kerala matta rice, Sambar, Rasam, Avial, Thoran, Olan, Erissery</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Mains (non veg)</td>
                            <td className="p-4 border-b border-black/5">Meen curry (fish curry), Nadan kozhi curry (country chicken), Prawn roast</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Breads</td>
                            <td className="p-4 border-b border-black/5">Parotta, Appam</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Live counter</td>
                            <td className="p-4 border-b border-black/5">Dosa station with 3 chutneys</td>
                        </tr>
                        <tr>
                            <td className="p-4">Desserts</td>
                            <td className="p-4">Palada pradhaman, Ada pradhaman, Fresh fruit</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mb-4 text-gray-700">
                The cost for a spread like this runs between Rs. 700 and Rs. 1,000 per person in Kochi, depending on the seafood selections and number of live counters.
            </p>

            <p className="mb-12">
                What makes this work at corporate events is the talking point it creates. People remember the company that served them real Kerala food at a conference. It becomes a reference point. "Oh, that Infopark event with the amazing fish curry." That kind of association is worth far more than the catering bill.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4">The Global Mini Plates Format</h3>

            <p className="mb-6">
                This is ideal for product launches, networking events, and cocktail style corporate gatherings where people are standing and moving around rather than sitting at tables. Instead of a full sit down meal, serve small plates from multiple cuisine stations. Guests circulate, pick up small portions from different counters, and eat while they mingle.
            </p>

            <div className="relative w-full h-[350px] mb-8 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_appetizers.png" fill className="object-cover" alt="Mini plate food stations at corporate networking event in Kochi" />
            </div>

            <p className="font-medium text-[#D4AF37] mb-4">Station ideas:</p>

            <ul className="space-y-2 mb-6 list-disc pl-6">
                <li><strong>Kerala bites:</strong> Mini appam cups with chicken stew, fish cutlets, banana chips</li>
                <li><strong>Indian street food:</strong> Pani puri shooters, mini samosas, dahi puri cups</li>
                <li><strong>Asian corner:</strong> Dim sum baskets, spring rolls, edamame</li>
                <li><strong>Mediterranean:</strong> Hummus and pita, falafel bites, grilled halloumi skewers</li>
                <li><strong>Dessert bar:</strong> Mini payasam shots in tiny glasses, brownie bites, fruit tarts</li>
            </ul>

            <p className="mb-4">
                Each station needs one to two staff members and a compact 4 to 6 foot setup. For a 100 person event, four to five stations create a fantastic flow with zero queuing problems because guests spread naturally across the room.
            </p>

            <p className="mb-12 text-gray-700">
                This format costs slightly more per head (Rs. 900 to Rs. 1,400) because of the variety and staffing, but for events where impressions matter, it is worth every rupee.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mb-4">The Working Lunch Box</h3>

            <p className="mb-6">
                For seminars, training sessions, and all day meetings where people need to eat quickly and get back to the agenda, individual packed meals are sometimes the smartest option. But there is a right way and a wrong way to do boxed meals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/20">
                    <h4 className="font-medium text-red-400 mb-2">The wrong way</h4>
                    <p className="text-sm">A generic cardboard box with cold rice, one curry, and a bruised banana. Everyone has received this at some point. It is depressing.</p>
                </div>
                <div className="bg-green-900/20 p-6 rounded-lg border border-green-500/20">
                    <h4 className="font-medium text-green-400 mb-2">The right way</h4>
                    <p className="text-sm">A well designed meal box with compartments, served warm, with thoughtful variety.</p>
                </div>
            </div>

            <div className="relative w-full h-[350px] mb-8 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_traditional.png" fill className="object-cover" alt="Premium corporate lunch box with Kerala meals delivered in Kochi" />
            </div>

            <p className="font-medium text-[#D4AF37] mb-4">Our recommended corporate lunch box setup:</p>

            <ul className="space-y-2 mb-6 list-disc pl-6">
                <li>Compartment 1: Fragrant ghee rice or Malabar biryani</li>
                <li>Compartment 2: Kerala chicken curry or paneer masala</li>
                <li>Compartment 3: Thoran (dry vegetable) and pickle</li>
                <li>Compartment 4: Pappadam and salad</li>
                <li>Separate cup: Payasam or fruit custard</li>
            </ul>

            <p className="mb-4">
                Each box comes with a paper napkin, cutlery set, and a water bottle. Delivered warm, organized, and ready to eat at the desk or in the conference room. Cost per box: Rs. 300 to Rs. 550 depending on the protein and dessert options.
            </p>

            <p className="mb-8 font-medium">
                This format eliminates serving time completely. No lines, no buffet setup, no waiting. Everyone gets their food simultaneously, eats at their own pace, and is back in the meeting within 20 minutes.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/corporate-catering" className="text-[#D4AF37] font-medium hover:underline">
                    Need lunch boxes for your next corporate training? We deliver across Kochi. Check our Corporate Catering options.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Catering for Different Types of Corporate Events</h2>

            <p className="mb-8">Not all corporate events are the same, and the catering approach should shift based on the type of event.</p>

            <div className="space-y-8 mb-12">
                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Conferences and Seminars</h3>
                    <p className="mb-2">These typically run for a full day or multiple days. Food is needed for breakfast, tea breaks, lunch, and sometimes an evening snack.</p>
                    <p className="mb-2"><strong className="text-[#D4AF37]">What works:</strong> Separate stations for each meal time rather than one big buffet. A breakfast counter that runs from 8:30 to 10:00 AM with idli, dosa, bread, eggs, and coffee. A mid morning tea break with biscuits and banana fritters. A proper lunch spread at the scheduled break. An afternoon tea with snacks.</p>
                    <p className="italic text-gray-700"><strong className="text-gray-900">Key tip:</strong> Keep the lunch lighter than you would at a wedding. Heavy meals in the middle of a conference make people drowsy. Focus on balanced portions, good protein, fresh vegetables, and not too much rice. Save the biryani for the closing lunch on the last day when people are more relaxed.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Product Launches and Client Events</h3>
                    <p className="mb-2">These are about making an impression. The food is part of the brand experience.</p>
                    <p className="mb-2"><strong className="text-[#D4AF37]">What works:</strong> Themed setups that match the event aesthetic. If the product launch has a specific color scheme or theme, the catering presentation should align. Use branded napkins if the client wants them. Set up food stations that look as designed as the rest of the event.</p>
                    <p className="italic text-gray-700"><strong className="text-gray-900">Key tip:</strong> For client facing events, quality over quantity always wins. Fewer items, impeccably prepared and beautifully presented, create a far stronger impression than a 30 dish buffet where half the items are average.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Team Outings and Celebrations</h3>
                    <p className="mb-4">Office parties, project completion celebrations, festival events, annual day functions. These are the fun ones.</p>

                    <div className="relative w-full h-[300px] mb-4 rounded-xl overflow-hidden bg-black/5">
                        <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Team celebration interactive food counter at Kochi startup office" />
                    </div>

                    <p className="mb-2"><strong className="text-[#D4AF37]">What works:</strong> Interactive food experiences. Live counters where people can customize their plates. A build your own wrap station. A dessert decorating corner. A Kerala snack challenge where teams compete to identify dishes blindfolded. We have actually done that last one at a tech company in Kakkanad and it was the highlight of their annual party.</p>
                    <p className="italic text-gray-700"><strong className="text-gray-900">Key tip:</strong> Let the food be fun. This is not a boardroom lunch. This is people letting loose. Finger foods, interactive stations, and a good dessert spread go further than a formal multi course meal <Link href="/blog/outdoor-catering-tips-kerala-events" className="text-[#D4AF37] hover:underline">(If your team outing is outdoors, our outdoor catering considerations here are very handy)</Link>.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Regular Office Meals and Daily Catering</h3>
                    <p className="mb-2">Some companies in Kochi hire caterers for ongoing daily lunch service for their employees. This is a different game entirely because consistency matters more than novelty.</p>
                    <p className="mb-2"><strong className="text-[#D4AF37]">What works:</strong> A rotating weekly menu that cycles through different Kerala meals, North Indian options, and lighter fare. Employees should not eat the same thing two days in a row. Build a four week rotation so that the menu feels fresh.</p>
                    <p className="italic text-gray-700"><strong className="text-gray-900">Key tip:</strong> Gather feedback. Set up a simple system where employees can rate meals or request dishes. The companies that do this have noticeably happier teams around lunchtime, and employee satisfaction with food directly impacts workplace mood. We have seen this firsthand with the ongoing contracts we manage.</p>
                </div>
            </div>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/daily-office-catering" className="text-[#D4AF37] font-medium hover:underline">
                    Running regular office meals? Our daily catering service covers companies across Kochi and Ernakulam. Learn more.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Logistics That Keep Corporate Events Running Smooth</h2>

            <p className="mb-8">
                Corporate clients have zero tolerance for catering problems. At a family wedding, a 15 minute delay is forgiven with a smile. At a corporate event, a 15 minute delay means the CEO is tapping their watch, the schedule is disrupted, and someone is getting an uncomfortable phone call. Here is how we approach logistics for corporate events.
            </p>

            <div className="space-y-6 mb-12">
                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2 text-xl">Timing Precision</h4>
                    <p>We build our delivery schedule backward from the serving time. If lunch is at 1:00 PM, our team is at the venue by 11:30 AM for buffet setup. All food arrives by 12:15 PM. Hot items go into chafing dishes by 12:30 PM. By 12:50 PM everything is set, garnished, and ready. When the conference breaks for lunch at 1:00 PM sharp, the buffet is waiting. Not half ready. Not "almost there." Waiting. For packed lunch deliveries, we arrive 30 minutes before the scheduled break and stage everything at the designated distribution point.</p>
                </div>

                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2 text-xl">Serving Speed</h4>
                    <p className="mb-2">For buffet style corporate lunches, our rule is that no guest should wait more than 8 to 10 minutes from joining the line to having a full plate <Link href="/blog/buffet-vs-sadhya-catering" className="text-[#D4AF37] hover:underline">(If you're unsure if a buffet is the right fit, check our format guide here).</Link></p>
                    <p className="mb-2">To achieve that with 100 guests: <Link href="/blog/how-to-plan-catering-200-person-wedding" className="text-[#D4AF37] hover:underline">(See our dedicated planning guide for gatherings over 200)</Link></p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Two serving lines (both sides of the buffet table)</li>
                        <li>Dedicated staff at each station to serve quickly</li>
                        <li>Pre plated starters on the table so guests can begin eating while others are still in line</li>
                        <li>Dessert on a separate counter to avoid bottleneck at the main line</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2 text-xl">Venue Coordination</h4>
                    <p className="mb-2">Before every corporate event, someone from our team visits the venue to assess:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Kitchen access and staging area</li>
                        <li>Electrical outlets for hot plates and warmers</li>
                        <li>Parking for delivery vehicles (Kochi corporate parks can be tricky with parking)</li>
                        <li>Elevator access if the event is on an upper floor</li>
                        <li>Waste disposal arrangements</li>
                    </ul>
                    <p>This visit happens at least three days before the event. We have a checklist of 22 items that we run through. It sounds excessive, but every item on that list exists because we once had a problem that could have been prevented by checking it in advance.</p>
                </div>

                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2 text-xl">The Quiet Cleanup</h4>
                    <p>Something most caterers overlook: the way you leave a corporate venue matters. After the event, our team clears everything within 30 to 45 minutes. Leftover food is packed. Serving equipment is removed. Tables are wiped down. The space looks like catering was never there. Corporate venue managers remember this. Event coordinators remember this. And when the next event comes around, they recommend the caterer who left the space spotless without being asked.</p>
                </div>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Kochi Corporate Catering: What Makes It Different</h2>

            <p className="mb-8">
                Catering for companies in Kochi has some specific characteristics that are worth understanding if you are an event planner or an office admin handling food for the first time.
            </p>

            <div className="space-y-6 mb-12 border-l-2 border-black/10 pl-6">
                <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">The IT Corridor Factor</h3>
                    <p>Infopark, Smartcity, and the Kakkanad tech belt are home to thousands of employees from across India. The food needs at these companies are incredibly diverse. A single lunch spread might need to satisfy someone from Palakkad who wants rice and sambar, someone from Delhi who wants roti and dal, someone from Chennai who wants curd rice, and someone from Bangalore who is looking for a good filter coffee. We have learned to build what we call "anchor and variety" menus for tech companies. The anchor is always Kerala food because that is where we are and it is what we do best. The variety comes from two or three additional options from other cuisines that rotate daily or event to event.</p>
                </div>

                <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">The Startup Culture</h3>
                    <p className="mb-2">Kochi has a growing startup ecosystem, and these companies approach catering differently from large corporates. Budgets are tighter. Vibes are more casual. The 25 year old founder does not want a formal buffet. They want something fun, good, and Instagram worthy. For startup events, we have had great success with:</p>
                    <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Food truck style setups (even indoors, using portable counters styled like street food stalls)</li>
                        <li>Single hero dish events (one amazing biryani, served perfectly, instead of 10 mediocre items)</li>
                        <li>Build your own bowl stations (rice base, choice of protein, choice of curry, toppings)</li>
                    </ul>
                    <p>These are cost effective, experiential, and match the energy of a young company celebrating a milestone.</p>
                </div>

                <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Monsoon and Delivery Challenges</h3>
                    <p>Between June and September, delivering food to corporate parks in Kochi requires extra planning. Roads flood. Traffic crawls. Deliveries that take 20 minutes in January take 50 minutes in July. We maintain a monsoon delivery buffer of 45 extra minutes for every corporate delivery during those months. And we use sealed, waterproof containers for all food transport so that even if the delivery vehicle gets caught in a downpour, the food arrives dry and intact.</p>
                </div>
            </div>

            <h2 className="text-3xl mt-16 mb-6">A Story from Our Own Kitchen</h2>

            <p className="mb-6">
                A couple of months ago, a mid sized tech company in Infopark called us for what they described as a "simple team lunch for 80 people." When we asked about the occasion, they said it was their fifth anniversary as a company. Five years of building something from scratch. The founder wanted to celebrate but did not want anything too formal.
            </p>

            <p className="mb-6">
                We suggested something we had been wanting to try: a Kerala Thalassery biryani pop up inside their office. One dish. Done spectacularly.
            </p>

            <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Live Thalassery biryani dum station at Infopark corporate lunch" />
            </div>

            <p className="mb-6">
                We brought in our biryani team, set up a live dum station in their pantry area, and cooked the biryani on site. The aroma spread through the entire floor. By the time we opened the pot, people had gathered from other companies in the building just to see what was happening. We served 80 plates of Thalassery biryani with raita, pickle, and pappadam. That was it. No elaborate buffet. No 15 dish spread. Just one dish, made with absolute care, served fresh.
            </p>

            <p className="mb-12 font-medium">
                The founder later posted on LinkedIn about the lunch, calling it "the best team meal in five years." Three other companies from the same building contacted us the following week asking for the same thing. Sometimes, the most memorable corporate catering is not about doing the most. It is about doing one thing so well that people cannot stop talking about it.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Planning Your Next Corporate Event? Start Here</h2>

            <p className="mb-6">If you have a corporate event coming up in Kochi and you want the food to be more than an afterthought, here is a quick decision guide:</p>

            <div className="space-y-4 mb-12 bg-black/5 p-8 rounded-2xl border border-black/10">
                <p><strong>For conferences and seminars:</strong> Structured buffet with Kerala and multi cuisine options. Light lunch, strong tea breaks, scheduled precisely around the agenda.</p>
                <p><strong>For client facing events and launches:</strong> Curated mini plates or themed stations. Quality over quantity. Presentation that matches the event branding.</p>
                <p><strong>For team celebrations:</strong> Interactive food experiences. Live counters, single hero dish pop ups, or casual finger food spreads.</p>
                <p><strong>For daily office meals:</strong> Rotating Kerala based menus with variety add ons. Consistent quality, feedback loops, and reliable delivery.</p>
                <p><strong>For startup milestones:</strong> Fun, creative, slightly unexpected. Something that gives people a story to tell.</p>
            </div>

            <p className="mb-8">
                Whatever your event looks like, the food should add to the experience, not just fill stomachs. That is the standard we hold ourselves to at Matzah Caterers, whether it is an 80 person team lunch or a 500 person annual conference.
            </p>

            <div className="mt-16 bg-black/5 border border-[#D4AF37]/30 rounded-2xl p-10 text-center">
                <h3 className="text-3xl mb-4 text-[#D4AF37]">Let us build the right menu for your next corporate event.</h3>
                <p className="mb-8 text-lg">We will come back with a custom proposal within 24 hours.</p>
                <p className="font-medium text-lg text-gray-900">
                    📞 <Link href="tel:+918921038043" className="text-[#D4AF37] hover:underline">Call us</Link> or 📩 <Link href="/contact" className="text-[#D4AF37] hover:underline">Send your event details</Link>
                </p>
            </div>
        </>
    );
}
