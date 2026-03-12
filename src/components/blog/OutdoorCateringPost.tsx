import Image from "next/image";
import Link from "next/link";

const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Plan Outdoor Catering for Kerala Events",
    "description": "A comprehensive checklist and guide for planning successful outdoor catering events in Kerala, handling logistics, weather, and menus.",
    "step": [
        {
            "@type": "HowToStep",
            "name": "Venue and Ground Assessment",
            "text": "Visit the venue to assess ground conditions and ensure proper drainage."
        },
        {
            "@type": "HowToStep",
            "name": "Weather Forecasting",
            "text": "Start a 72-hour weather watch pinpointing the specific venue area."
        },
        {
            "@type": "HowToStep",
            "name": "Waterproof Cover",
            "text": "Confirm full waterproof canopies with side panels for food and dining areas."
        },
        {
            "@type": "HowToStep",
            "name": "Power and Water Supply",
            "text": "Assess power supply, arrange a backup generator, and confirm water tankers if needed."
        },
        {
            "@type": "HowToStep",
            "name": "Outdoor Menu Adaptation",
            "text": "Adapt the menu avoiding foods that wilt, lose shape in humidity, or require constant deep chilling."
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Can you do a Sadhya outdoors?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a full banana leaf Sadhya can be served outdoors. It requires flat ground or raised platforms, covered seating since Sadhya cannot be served in rain, a larger serving team, and proper securing of banana leaves against the wind."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle rain during outdoor catering in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We deploy a rapid-response system. This includes pre-rigged canopies mapped to deploy in under 10 minutes, sealed insulated transport containers, chafing dishes with separate covers, and a 72-hour weather monitoring protocol to activate backup indoor locations if necessary."
            }
        }
    ]
};

export default function OutdoorCateringPost() {
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Matzah Caterers",
                        "url": "https://matzahcaterers.in",
                        "areaServed": {
                            "@type": "City",
                            "name": "Kochi"
                        }
                    })
                }}
            />

            <p className="mb-6">There is something magical about an outdoor event in Kerala.</p>

            <p className="mb-6">
                The soft evening light filtering through coconut palms. A gentle breeze coming off the backwaters. Guests mingling on open lawns while the smell of freshly tempered curry leaves drifts across the venue. When it works, outdoor catering in Kerala feels like nothing else in the world.
            </p>

            <p className="mb-6 font-medium text-[#D4AF37]">And then there is the other version.</p>

            <p className="mb-6">
                The one where the sky turns dark at 3 PM. Where the wind picks up and sends paper plates flying. Where the rain comes sideways and suddenly your beautiful buffet setup looks like a disaster zone. Where the generator dies right when the dosa counter was getting into its rhythm.
            </p>

            <p className="mb-6">
                We have lived through both versions. Many times. And after years of handling outdoor events across Kochi, Ernakulam, Alappuzha, and the coastal belt, we have developed a system that consistently delivers the first version and prevents the second.
            </p>

            <p className="mb-6">
                This guide is everything we know about outdoor catering in Kerala. The menu choices that work best, the logistics that most people overlook, and the real stories from events where we had to think on our feet. If you are planning any kind of outdoor event, from a beachside wedding to a farmhouse birthday to a corporate team outing, this is for you.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/outdoor-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">
                    Planning an outdoor event? Explore our Outdoor Catering services across Kerala.
                </Link>
            </div>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Outdoor catering buffet setup on lawn at Kerala event" />
            </div>

            <h2 className="text-3xl mt-16 mb-6">Choosing the Right Menu for Outdoor Events</h2>

            <p className="mb-6">
                The first thing most people get wrong about outdoor catering is treating the menu like an indoor event menu. It is not the same. Outdoors, you are working with different conditions. Temperature fluctuations, wind, limited kitchen infrastructure, sometimes no kitchen at all. Your menu needs to respect those realities.
            </p>

            <p className="mb-8">Here is how we think about outdoor menus.</p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Foods That Work Brilliantly Outdoors</h3>

            <p className="mb-4">
                <strong>Finger foods and small bites.</strong> When guests are standing, walking around, and socializing, they do not want to juggle a full plate. Bite sized options are perfect for the first hour of any outdoor event.
            </p>

            <p className="mb-4">Our top picks for Kerala outdoor events:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Chicken or fish cutlets</strong> on small plates with mint chutney</li>
                <li><strong>Parippu vada</strong> and <strong>uzhunnu vada</strong> served fresh and hot</li>
                <li><strong>Mini appam with stew</strong> in small cups. This one always surprises guests and it is incredibly easy to serve outdoors.</li>
                <li><strong>Grilled prawns on skewers</strong> for coastal venue events</li>
                <li><strong>Banana bajji</strong> straight from the oil. The smell alone pulls people toward the counter.</li>
            </ul>

            <p className="mb-8 italic text-gray-700">
                These work because they are self contained, easy to eat while standing, and do not need elaborate plating.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_appetizers.png" fill className="object-cover" alt="Finger food appetizer spread at outdoor catering event Kochi" />
            </div>

            <p className="mb-4">
                <strong>Buffet style mains.</strong> For the main course at outdoor events, a well organized buffet is almost always the best choice. Sit down Sadhya service on banana leaves is possible outdoors, but it requires a lot more infrastructure (we will get to that).
            </p>

            <p className="mb-4">For a standard outdoor buffet, strong options include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Kerala biryani (chicken or vegetable)</li>
                <li>Meen curry (fish curry) with Kerala matta rice</li>
                <li>Butter chicken or paneer butter masala for North Indian variety</li>
                <li>Chapati and parotta</li>
                <li>Avial and thoran as Sadhya style sides</li>
                <li>A live counter for dosas or shawarma</li>
            </ul>

            <p className="mb-8">
                <strong>Desserts that travel well.</strong> Outdoor desserts need to hold up in heat and humidity. Payasam works beautifully because it can be served warm or at room temperature. Ice cream is tricky unless you have a proper freezer setup, which is not always possible at remote venues. Gulab jamun in warm syrup is foolproof. Fresh fruit platters with watermelon and pineapple are refreshing and zero hassle.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Foods That Struggle Outdoors</h3>

            <p className="mb-4">Some dishes just do not translate well to open air settings. From experience, we avoid:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
                <li><strong>Anything that wilts quickly.</strong> Elaborate salad spreads look great for about 20 minutes, then start looking sad.</li>
                <li><strong>Fried items prepared too far in advance.</strong> Pappadam and banana chips need to be crispy. In Kerala's humidity, they can go soft within an hour if left uncovered.</li>
                <li><strong>Heavy cream based desserts.</strong> Anything that needs consistent refrigeration is risky at venues without reliable power.</li>
                <li><strong>Too many sauce heavy dishes.</strong> Outdoor buffet tables get messy fast. Dishes that splatter or drip cause problems when guests are walking on grass or uneven surfaces.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Can You Do a Full Sadhya Outdoors?</h3>

            <p className="mb-6">Yes. Absolutely. We have done it many times. But it requires serious planning.</p>

            <p className="mb-4">A banana leaf Sadhya outdoors means:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Covered seating for all guests (you cannot serve Sadhya in rain)</li>
                <li>Flat, clean ground or raised platforms for cross legged seating</li>
                <li>A much larger serving team since you cannot use buffet self service</li>
                <li>Banana leaves secured properly so wind does not scatter them before guests sit down</li>
            </ul>

            <p className="mb-8">
                For a 200 guest outdoor Sadhya, you need at least double the setup time compared to an indoor venue. But the experience, when done right, is absolutely worth it. There is something deeply special about eating a Sadhya under a pandal with the sky above you.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Full Sadhya served under outdoor pandal at Kerala wedding" />
            </div>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/kerala-sadhya-catering" className="text-[#D4AF37] font-medium hover:underline">
                    Looking to serve a full Sadhya at your outdoor event? Our Kerala Sadhya Catering team can make it happen.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Logistics Mastery: The Things Nobody Thinks About Until It Is Too Late</h2>

            <p className="mb-6">
                Menu is important. But for outdoor catering, logistics is where events are won or lost. Every single problem we have ever faced at an outdoor event came down to a logistics detail that someone underestimated.
            </p>

            <p className="mb-8">Here is what you need to get right.</p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Shelter and Cover</h3>

            <p className="mb-4">
                In Kerala, the question is never "will it rain?" The question is "when will it rain?" Even during the so called dry season, surprise showers happen. Especially along the coast and in the highlands.
            </p>

            <div className="space-y-6 mb-8">
                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2">For the food area:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>A proper waterproof canopy or shamiana over the entire buffet zone. Not just a garden umbrella. A full cover with side drops that can be rolled down in seconds.</li>
                        <li>Elevation. If the venue tends to collect water, your food stations need to be on raised platforms or pallets. We once set up at a backwater venue in Alappuzha where the ground was soft. Ten minutes of rain and everything was sitting in two inches of water. We had the stations elevated that time, thankfully. But it taught us to check ground drainage at every outdoor venue.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-medium text-[#D4AF37] mb-2">For guests:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Covered dining area, even if it is a temporary tent setup. Nobody enjoys eating in the rain, no matter how "adventurous" the event is supposed to feel.</li>
                    </ul>
                </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Power and Equipment</h3>

            <p className="mb-6">Outdoor venues rarely have the electrical infrastructure that indoor halls offer. You need to plan for this specifically.</p>

            <p className="mb-4">
                <strong>Generator:</strong> For any event over 100 guests, bring a backup generator. Not as a precaution. As a requirement. If you are running live counters (dosa, shawarma, noodles), each one draws power. If you are running refrigeration for beverages, that draws power. If the venue's electricity trips during peak service, you need to be back up within minutes, not scrambling.
            </p>

            <p className="mb-4"><strong>Portable kitchen equipment:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Gas burners with wind guards (regular burners waste fuel and heat in windy conditions)</li>
                <li>Insulated food containers for transporting dishes from an off site kitchen</li>
                <li>Chafing dishes with solid fuel warmers (sterno cans) rather than electric warmers</li>
                <li>Adequate water supply, either confirmed from the venue or brought in via tanker</li>
            </ul>

            <p className="mb-8 italic border-l-4 border-[#D4AF37] pl-4">
                We carry a standard outdoor event kit that includes all of this plus extension cords, extra fuel canisters, cable ties, and duct tape. That last one sounds funny, but duct tape has saved more outdoor events than any piece of fancy equipment.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Pest and Hygiene Control</h3>

            <p className="mb-4">
                Outdoors means insects. Flies, ants, mosquitoes. In Kerala's tropical climate, this is not a minor issue. It can genuinely ruin the food experience if not handled.
            </p>

            <p className="mb-4">What we do:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Food covers on every single dish when not actively being served</li>
                <li>Mesh screens around the buffet zone if the setup allows</li>
                <li>Natural repellents (citronella candles, neem based sprays) placed around the dining area</li>
                <li>Dedicated cleanup crew removing used plates and food waste continuously. Waste attracts flies faster than anything.</li>
                <li>Hand sanitizer stations at the start of the buffet line and near seating</li>
            </ul>

            <p className="mb-8 font-medium">
                These details are invisible when done well. Guests do not notice that there are no flies around the food. But they absolutely notice when there are.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Waste Management</h3>

            <p className="mb-4">
                Outdoor venues often do not have the waste infrastructure of a banquet hall. You need to bring your own system.
            </p>

            <p className="mb-4">For a 200 guest outdoor event, we set up:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Separate bins for wet waste, dry waste, and plate waste</li>
                <li>Bin liners that are sealed and replaced every 30 to 45 minutes</li>
                <li>A waste collection point away from the food and dining zone</li>
                <li>Arrangement for post event cleanup and waste disposal</li>
            </ul>

            <p className="mb-8">
                This is not glamorous work, but it is what separates a professional outdoor catering operation from an amateur one. Venues remember caterers who leave the space cleaner than they found it. And that reputation leads to referrals.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Weather Proofing: Our Monsoon Survival Playbook</h2>

            <p className="mb-6">
                Kerala gets roughly 3,000 mm of rainfall a year. That is nearly 10 feet of rain. If you are doing outdoor events in this state, you do not get to pretend weather is not a factor.
            </p>

            <p className="mb-8">
                Here is our monsoon season playbook, developed through years of real events between June and September.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/hero.jpg" fill className="object-cover" alt="Waterproof canopy covering food stations at outdoor Kerala wedding" />
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The 72 Hour Weather Watch</h3>

            <p className="mb-6">
                Starting three days before any outdoor event, we actively monitor weather forecasts for the specific venue location. Not just "Kochi weather" but pinpointed forecasts for the area. Weather can vary significantly between Kakkanad and Fort Kochi on the same afternoon.
            </p>

            <p className="mb-8">
                If heavy rain is predicted for exactly the service window, we have a frank conversation with the client about contingency options. Sometimes that means shifting the food service under a larger tent. Sometimes it means having an indoor backup location identified at the venue.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Rapid Deploy System</h3>

            <p className="mb-6">
                For monsoon season events, we pre rig all our canopies and covers so they can be deployed in under 10 minutes. Our setup crew practices this. It is not dramatic. It is just preparation.
            </p>

            <p className="mb-8">
                Every chafing dish gets a cover. Every serving station has a waterproof top that can be pulled over. Food transport containers are fully sealed, not loosely covered.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Temperature Challenge</h3>

            <p className="mb-4">
                Monsoon in Kerala is not just about rain. It also brings humidity levels of 85 to 95 percent. That humidity affects food differently than dry heat.
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Fried items lose crispness faster. Solution: fry in smaller batches, more frequently.</li>
                <li>Rice can get sticky if left in closed containers too long. Solution: use wide, shallow containers with breathable covers.</li>
                <li>Payasam and curries hold up well in humidity, which is actually good news for Kerala cuisine specifically.</li>
            </ul>

            <h3 className="text-2xl font-medium text-[#D4AF37] mt-12 mb-4">A Story Worth Telling</h3>

            <div className="bg-black/5 border border-black/10 p-6 rounded-lg mb-12">
                <p className="mb-4">
                    Last September, we were booked for a 150 guest wedding reception at a beachside venue near Cherai. Beautiful location. Open lawn overlooking the sea. The kind of setup that looks incredible on Instagram.
                </p>
                <p className="mb-4">
                    The forecast said "light rain possible in the evening." The reception was scheduled for 7 PM. We arrived at 3 PM for setup and the sky was clear. By 5 PM, clouds started building. By 6:15 PM, forty five minutes before guests were supposed to arrive, the sky opened up. Not light rain. A proper Kerala downpour.
                </p>
                <p className="mb-4">Here is what happened.</p>
                <p className="mb-4">
                    Our team had already set up the full buffet under a heavy duty waterproof canopy with side panels. The dining area was under a separate covered shamiana. All food was in sealed insulated containers, not yet transferred to chafing dishes. The generator was running under its own rain cover.
                </p>
                <p className="mb-4">
                    When the rain hit, we pulled the side panels down on the food canopy, waited fifteen minutes for the worst to pass, then opened up and started transferring food to the serving stations. By 7 PM, when guests started arriving, everything was set, hot, and ready. The lawn was wet but the event spaces were dry.
                </p>
                <p className="mb-4">
                    Several guests told the couple they had no idea it had rained so heavily just before. The couple knew, of course. They had been watching from inside the venue, nervous. But when they saw our setup standing solid through the downpour, the nervousness turned into trust.
                </p>
                <p className="font-medium">
                    That is what monsoon proofing actually looks like. Not hoping the rain stays away. Assuming it will come and being ready when it does.
                </p>
            </div>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/outdoor-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">
                    See how we handle outdoor events in any season. Check our Outdoor Catering page.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Venue Types and What Works Best for Each</h2>

            <p className="mb-8">
                Not all outdoor venues are the same, and the catering approach should adapt to each one.
            </p>

            <div className="space-y-8 mb-12">
                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Beach and Waterfront Venues</h3>
                    <p className="mb-4">Popular in Kochi, Alappuzha, and Varkala. Beautiful settings but challenging for catering because of wind, sand, and salt air.</p>
                    <p className="italic text-gray-700"><strong>Tips:</strong> Elevated food stations to avoid sand contact. Wind guards on all burners. Extra covers. Finger foods work better than full Sadhya here. Keep the menu simpler and focus on quality.</p>
                </div>

                <div className="relative w-full h-[300px] mb-6 rounded-xl overflow-hidden bg-black/5">
                    <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Beachside wedding catering setup near Cherai Kerala" />
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Farm and Plantation Venues</h3>
                    <p className="mb-4">Increasingly popular for destination weddings in Munnar, Wayanad, and the midlands. Often remote, with limited road access and zero kitchen infrastructure.</p>
                    <p className="italic text-gray-700"><strong>Tips:</strong> Everything must be transported. Use an off site kitchen at the nearest town and transport finished dishes in insulated carriers. Keep a simple but impactful menu. Grilled meats, one pot dishes like biryani, and pre made desserts work best.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Open Lawns and Gardens</h3>
                    <p className="mb-4">The most common outdoor event setup in Kochi. Hotels, resorts, and private properties often have large lawn spaces for events.</p>
                    <p className="italic text-gray-700"><strong>Tips:</strong> These are the easiest to cater because they usually have indoor kitchen access nearby. Full Sadhya, elaborate buffets, and multiple live counters are all possible. Focus on shelter for the dining area and keep the kitchen to buffet distance short for hot food.</p>
                </div>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Your Outdoor Event Checklist</h2>

            <p className="mb-6">Before you finalize any outdoor catering arrangement, make sure these are covered:</p>

            <div className="bg-black/5 p-6 rounded-xl border border-black/10 mb-8">
                <ul className="space-y-3">
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Venue visited and ground conditions assessed</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Weather forecast monitoring plan in place</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Full waterproof cover for food and dining areas confirmed</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Power supply assessed and backup generator arranged</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Water supply confirmed or tanker booked</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Menu adapted for outdoor conditions (not copy pasted from an indoor menu)</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Pest control measures planned</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Waste management system arranged</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Staff briefed on rain contingency procedures</li>
                    <li className="flex items-start"><span className="text-[#D4AF37] mr-3">✓</span> Transport route to venue tested during the same time of day as the event</li>
                </ul>
            </div>

            <p className="mb-12 italic border-l-4 border-[#D4AF37] pl-4">
                That last point is one people always forget. A venue that takes 30 minutes to reach on a Sunday morning might take 90 minutes on a Saturday evening. Always test the route.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Let the Outdoors Be the Star. We Will Handle the Food.</h2>

            <p className="mb-6">
                Outdoor events in Kerala have this energy that indoor events simply cannot replicate. The natural beauty, the openness, the sense of celebration under the sky. When the food matches that energy and the logistics are handled invisibly, guests walk away with memories that last a lifetime.
            </p>

            <p className="mb-12 font-medium">
                That is what we work toward at every outdoor event. Not just feeding people, but making the food part of the experience.
            </p>

            <div className="mt-16 bg-black/5 border border-[#D4AF37]/30 rounded-2xl p-10 text-center">
                <h3 className="text-3xl mb-4 text-[#D4AF37]">Planning Your Next Outdoor Event?</h3>
                <p className="mb-8 text-lg">If you have an outdoor event coming up anywhere in Kerala and you want catering that adapts to the setting, respects the weather, and delivers food that guests actually talk about afterward, we should talk.</p>
                <p className="mb-6 font-medium text-xl text-gray-900">Get in touch with Matzah Caterers today.</p>
                <p className="font-medium text-lg">
                    📞 <Link href="tel:+918921038043" className="text-[#D4AF37] hover:underline">Call us</Link> or 📩 <Link href="/contact" className="text-[#D4AF37] hover:underline">Tell us about your outdoor event</Link> and we will plan the perfect menu together.
                </p>
            </div>
        </>
    );
}
