import Image from "next/image";
import Link from "next/link";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Is Sadhya or buffet better for a wedding?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For a traditional Kerala Hindu or Christian wedding, a Sadhya is culturally significant and expected. For diverse guest lists or evening receptions, a buffet provides better flexibility. A hybrid approach offers the best of both worlds."
            }
        },
        {
            "@type": "Question",
            "name": "How much does Sadhya catering cost vs buffet in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As of 2024 in Kochi, a traditional 26-dish Sadhya costs between Rs. 500 to 1,000 per plate. A multi-cuisine buffet ranges from Rs. 600 to 1,500. A hybrid setup with both Sadhya and buffet counters usually costs between Rs. 1,000 to 1,800 per plate."
            }
        },
        {
            "@type": "Question",
            "name": "Can you combine Sadhya and buffet at one event?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, a hybrid catering model works extremely well. You can serve the main traditional Sadhya on banana leaves in one area, and have adjacent buffet counters for non-veg dishes, North Indian food, live dosa counters, and extensive desserts."
            }
        }
    ]
};

const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Sadhya vs Buffet Catering Comparison",
    "description": "A detailed comparison of features, costs, and suitability between traditional Kerala Sadhya and multi-cuisine buffet catering formats.",
    "creator": {
        "@type": "Organization",
        "name": "Matzah Caterers"
    }
};

export default function BuffetVsSadhyaPost() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
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

            <p className="mb-6">This is the conversation that happens at every Kerala event planning table.</p>

            <p className="mb-6">
                Someone says, <span className="italic text-[#D4AF37]">"Let us do a Sadhya. Traditional. Banana leaf. Everyone loves it."</span>
            </p>

            <p className="mb-6">
                Someone else says, <span className="italic text-[#D4AF37]">"But what about the people who want variety? A buffet gives more options."</span>
            </p>

            <p className="mb-6">Then a third person jumps in with, <span className="italic text-[#D4AF37]">"Can we do both?"</span></p>

            <p className="mb-6">
                And suddenly everyone is talking over each other, nobody agrees, and the catering decision that should take 20 minutes drags on for weeks.
            </p>

            <p className="mb-6">
                We see this happen constantly. Families planning weddings. Companies organizing team events. Friends putting together milestone birthday celebrations. The buffet versus Sadhya debate comes up almost every single time, and the confusion is understandable because both formats have genuine strengths. Neither one is universally better. The right choice depends entirely on your event, your guests, your budget, and what kind of experience you want people to walk away with.
            </p>

            <p className="mb-6">
                After catering hundreds of events across Kochi and Kerala in both formats, and sometimes combining the two, we have a pretty clear picture of when each one shines and when it falls short. This guide lays it all out so you can make the decision confidently and stop going back and forth.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/catering" className="text-[#D4AF37] font-medium hover:underline">
                    Need help deciding? Our team at Matzah Caterers can design the perfect format for your event. Explore our Catering Services.
                </Link>
            </div>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_buffet.png" fill className="object-cover" alt="Side by side comparison of Kerala Sadhya and buffet catering setup" />
            </div>

            <h2 className="text-3xl mt-16 mb-6">The Honest Comparison: Strengths and Weaknesses</h2>

            <p className="mb-8">
                Let us start with a straightforward look at both options. No sugarcoating. Just what we have observed from real events over real years.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Kerala Sadhya</h3>

            <p className="mb-6">
                A Sadhya is not just a meal format. It is an experience. Guests sit together, a banana leaf is placed in front of each person, and the dishes arrive one by one in a specific sequence. There is a rhythm to it. A ritual. It connects people to Kerala's cultural roots in a way that no buffet table can replicate.
            </p>

            <h4 className="font-medium text-[#D4AF37] mb-4 text-lg">Where Sadhya excels:</h4>

            <ul className="space-y-4 mb-8">
                <li><strong>Cultural significance.</strong> For weddings, religious ceremonies, Onam celebrations, and traditional family events, a Sadhya carries emotional weight. It says something about the family hosting the event. It says, "We honor where we come from."</li>
                <li><strong>Portion control.</strong> Every guest gets the same amount of each dish, served directly to their leaf. There is no overcrowding at a buffet counter, no one piling their plate with biryani while the person behind them gets the last scraps. Everyone eats equally. That fairness is built into the format.</li>
                <li><strong>Presentation.</strong> A well laid out Sadhya is visually stunning. Twenty six dishes arranged on a bright green banana leaf, the colors of the curries and pickles and payasam creating a natural composition. Guests photograph it. They share it. It is inherently photogenic in a way that even the most elaborate buffet struggles to match.</li>
                <li><strong>Speed of service for large groups.</strong> This one surprises people. A Sadhya can actually be faster than a buffet for very large events. When you have 400 guests and a buffet with two serving lines, people wait 30 to 45 minutes. With a Sadhya, everyone sits down at the same time and food comes to them. Service for 400 guests can be completed in 20 to 25 minutes with a well trained team.</li>
            </ul>

            <h4 className="font-medium text-[#D4AF37] mb-4 text-lg">Where Sadhya struggles:</h4>

            <ul className="space-y-4 mb-12">
                <li><strong>Dietary flexibility is limited.</strong> A traditional Sadhya is vegetarian. If your guest list includes people who strongly prefer non veg, the Sadhya alone might not satisfy everyone. You can add non veg sides separately, but the core Sadhya remains veg.</li>
                <li><strong>Infrastructure needs.</strong> Sadhya requires flat seating areas, usually on the ground or at long low tables. Not every venue supports this. It also needs a larger serving team because you cannot do self service.</li>
                <li><strong>Familiarity gap.</strong> If a significant portion of your guests are from outside Kerala and have never experienced a Sadhya, some might feel uncertain about the format. Not everyone is comfortable sitting cross legged on the floor or knows the etiquette of eating from a banana leaf. This is less of a problem than it used to be, but it is still worth considering.</li>
                <li><strong>Guest mobility.</strong> During a Sadhya, guests are seated in one spot. The socializing happens before and after the meal, not during. For events where mingling is the point, like a casual birthday or a corporate mixer, this static format can feel restrictive.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Buffet</h3>

            <p className="mb-6">
                Buffets are the universal format. Flexible, familiar, and forgiving. Guests serve themselves from a spread of options, eat at their own pace, and can go back for seconds or thirds. It is the format most people picture when they hear the word "catering."
            </p>

            <h4 className="font-medium text-[#D4AF37] mb-4 text-lg">Where buffet excels:</h4>

            <ul className="space-y-4 mb-8">
                <li><strong>Variety without limits.</strong> A buffet can include Kerala food, North Indian food, Chinese, Arabian, continental, desserts from five different traditions, and a live counter making fresh dosas. You are not locked into one cuisine or one style. For events with diverse guest lists, this flexibility is huge.</li>
                <li><strong>Casual, social atmosphere.</strong> Guests walk around, chat while waiting in line, sit wherever they want, eat at their own speed. The buffet format creates a relaxed energy that works beautifully for corporate events, birthday parties, casual receptions, and any gathering where the vibe matters as much as the food.</li>
                <li><strong>Easier venue requirements.</strong> A buffet needs tables for the food and seating for guests. That is basically it. No banana leaves, no ground seating arrangements, no specific cultural setup. It works in banquet halls, hotel lawns, rooftops, conference rooms, and pretty much any space where you can fit a table.</li>
                <li><strong>Cost efficiency at scale.</strong> Here is something most people do not realize. For very large events (300 plus guests), a well planned buffet can sometimes be more cost effective than a full Sadhya. This depends on the menu, but buffets allow you to control quantities more precisely because guests self regulate their portions. With Sadhya, you serve fixed amounts to every single leaf regardless of whether that guest eats everything or not.</li>
            </ul>

            <h4 className="font-medium text-[#D4AF37] mb-4 text-lg">Where buffet struggles:</h4>

            <ul className="space-y-4 mb-12">
                <li><strong>The queue problem.</strong> This is the number one complaint about buffets at large events. Nobody enjoys standing in a line for 30 minutes waiting to get food. If your buffet is not designed with enough serving stations and smart crowd flow, the experience suffers badly.</li>
                <li><strong>Waste.</strong> Buffets generate more food waste than Sadhya service. Guests take more than they can eat. Dishes at the end of the buffet line get skipped because plates are already full. Serving vessels need to be kept topped up even as the event winds down, meaning leftover quantities are higher.</li>
                <li><strong>Less cultural weight.</strong> A buffet is practical. It is convenient. But it does not carry the same emotional and cultural resonance as a Sadhya. For a Kerala wedding specifically, choosing a buffet over a Sadhya can sometimes feel like a missed opportunity to the older generation of guests.</li>
                <li><strong>Inconsistent experience.</strong> The first person through the buffet line gets everything fresh, hot, and beautifully arranged. The person who comes through 45 minutes later sees half empty dishes, slightly dried out rice, and a dessert section that has been picked over. The experience degrades over time unless the catering team is actively replenishing.</li>
            </ul>

            <h2 className="text-3xl mt-16 mb-6">The Side by Side Breakdown</h2>

            <p className="mb-6">Here is a quick reference table that captures the key differences:</p>

            <div className="overflow-x-auto mb-8 bg-black/5 rounded-xl border border-black/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#D4AF37]/10 text-[#D4AF37]">
                            <th className="p-4 border-b border-black/10 font-medium">Factor</th>
                            <th className="p-4 border-b border-black/10 font-medium">Sadhya</th>
                            <th className="p-4 border-b border-black/10 font-medium">Buffet</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm md:text-base">
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Best for</td>
                            <td className="p-4 border-b border-black/5">Weddings, religious events, Onam, traditional celebrations</td>
                            <td className="p-4 border-b border-black/5">Corporate events, birthdays, casual parties, multi community events</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Cuisine range</td>
                            <td className="p-4 border-b border-black/5">Kerala vegetarian (non veg as add on only) - <Link href="/blog/best-kerala-sadhya-dishes-weddings" className="text-[#D4AF37] hover:underline">See detailed Sadhya dish breakdown</Link></td>
                            <td className="p-4 border-b border-black/5">Unlimited, any cuisine combination</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Guest experience</td>
                            <td className="p-4 border-b border-black/5">Formal, communal, cultural</td>
                            <td className="p-4 border-b border-black/5">Casual, flexible, social</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Serving style</td>
                            <td className="p-4 border-b border-black/5">Staff serves each guest directly</td>
                            <td className="p-4 border-b border-black/5">Self service</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Setup needs</td>
                            <td className="p-4 border-b border-black/5">Banana leaves, ground/low seating, large serving team</td>
                            <td className="p-4 border-b border-black/5">Tables, chafing dishes, serving stations</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Portion control</td>
                            <td className="p-4 border-b border-black/5 text-green-400">Excellent. Fixed per guest.</td>
                            <td className="p-4 border-b border-black/5 text-yellow-500">Moderate. Guests self regulate.</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Food waste</td>
                            <td className="p-4 border-b border-black/5">Lower</td>
                            <td className="p-4 border-b border-black/5">Higher</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Speed for large groups</td>
                            <td className="p-4 border-b border-black/5">Faster (everyone served simultaneously)</td>
                            <td className="p-4 border-b border-black/5">Slower (queue based)</td>
                        </tr>
                        <tr>
                            <td className="p-4 border-b border-black/5 font-medium">Per plate cost (Kochi, 2024)</td>
                            <td className="p-4 border-b border-black/5">Rs. 500 to 1,000</td>
                            <td className="p-4 border-b border-black/5">Rs. 600 to 1,500</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5 font-medium">Cultural impact</td>
                            <td className="p-4 border-b border-black/5">High</td>
                            <td className="p-4 border-b border-black/5">Moderate</td>
                        </tr>
                        <tr>
                            <td className="p-4">Photo appeal</td>
                            <td className="p-4">Very high (banana leaf aesthetics)</td>
                            <td className="p-4">Depends on setup quality</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/catering" className="text-[#D4AF37] font-medium hover:underline">
                    Want to see how each format looks in practice? Browse our event gallery and past setups.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">When to Choose Sadhya</h2>

            <p className="mb-8">Based on our experience, a traditional Sadhya is the clear winner in these situations:</p>

            <div className="space-y-8 mb-12">
                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Kerala Hindu and Christian Weddings</h3>
                    <p>This is where Sadhya belongs. It is the format that generations expect. When Ammachi sits down at a wedding and sees a banana leaf being placed in front of her with 26 dishes, that moment is meaningful. It is continuity. It is family. Choosing a buffet instead is not wrong, but you lose something intangible that a lot of families later wish they had kept.</p>
                </div>

                <div className="relative w-full h-[300px] mb-6 rounded-xl overflow-hidden bg-black/5">
                    <Image src="/kerala_sadhya.png" fill className="object-cover" alt="Rows of banana leaf Sadhya setup at Kerala wedding ceremony" />
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Onam Celebrations</h3>
                    <p>Whether it is a family Onam lunch or a corporate Onam celebration, the Sadhya is the centerpiece. We have catered Onam events for tech companies in Kochi where 200 employees sit together on the floor of a decorated conference hall and eat Sadhya. The energy in that room is incredible. People who have never eaten on a banana leaf try it for the first time and love it. No buffet creates that kind of shared memory.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Events Where You Want a Wow Factor</h3>
                    <p>If you want guests to walk away talking about the food, a beautifully executed Sadhya does that. The visual impact of 200 banana leaves laid out in rows, each with an identical spread of vibrant dishes, is genuinely breathtaking. We have had guests from other states tell us it was the most beautiful meal they had ever seen.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Intimate Family Events</h3>
                    <p>Engagement ceremonies, housewarming functions (griha pravesham), first birthday celebrations (choroonu). These family events are rooted in tradition, and a Sadhya honors that.</p>
                </div>
            </div>

            <h2 className="text-3xl mt-16 mb-6">When to Choose Buffet</h2>

            <p className="mb-8">A buffet is the smarter choice in these scenarios:</p>

            <div className="space-y-8 mb-12">
                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Corporate Events and Team Outings</h3>
                    <p>The social dynamics of a corporate event demand flexibility. People need to move around, network, grab food between sessions, and eat at their own pace. A buffet supports all of that. A formal Sadhya feels out of place at a product launch or a team building day.</p>
                </div>

                <div className="relative w-full h-[300px] mb-6 rounded-xl overflow-hidden bg-black/5">
                    <Image src="/menu_buffet.png" fill className="object-cover" alt="Multi cuisine buffet catering spread at Kochi corporate event" />
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Multi Community Guest Lists</h3>
                    <p>If your guest list includes significant numbers of people from North India, other countries, or communities that do not traditionally eat Kerala Sadhya, a buffet gives everyone something familiar. You can still include Kerala dishes in the buffet spread, but alongside options that cater to different palates.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Casual Celebrations</h3>
                    <p>House parties, milestone birthdays, anniversary dinners, reunion gatherings. These events thrive on a relaxed atmosphere. A buffet lets people eat when they want, sit where they want, and go back for seconds without waiting for a server.</p>
                </div>

                <div>
                    <h3 className="text-2xl font-medium text-gray-900 mb-2">Evening Receptions</h3>
                    <p>Wedding receptions that happen in the evening, separately from the ceremony, often work better as buffets. By evening, the formal Sadhya has already been served at the wedding itself. The reception is more relaxed, more social, and a buffet with diverse options and live counters fits that mood perfectly.</p>
                </div>
            </div>

            <h2 className="text-3xl mt-16 mb-6">The Hybrid Approach: Why Not Both?</h2>

            <p className="mb-6">
                Here is what we have been doing more and more over the past two years. And honestly, it might be the best solution for many events.
            </p>

            <p className="mb-6">The hybrid model works like this:</p>

            <ul className="space-y-4 mb-8">
                <li><strong>Sadhya as the main meal.</strong> Served at the traditional time, usually midday, with full ceremony and all the classic dishes on the banana leaf.</li>
                <li><strong>Buffet as the supplement.</strong> Set up alongside or after the Sadhya with non veg options, multi cuisine dishes, live counters, and desserts that go beyond payasam.</li>
            </ul>

            <p className="mb-8">
                This gives guests the cultural experience of a Sadhya and the variety of a buffet. Nobody feels left out. Nobody misses the tradition. And the food experience becomes multi layered instead of one dimensional.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">How We Structure a Hybrid Event</h3>

            <p className="mb-4">For a recent 350 guest wedding in Ernakulam, here is exactly what we set up:</p>

            <div className="bg-black/5 p-6 rounded-xl border border-black/10 mb-8 space-y-4">
                <p><strong>Sadhya zone:</strong> Covered hall with traditional seating. Full 26 dish Sadhya served on banana leaves. Three seatings of roughly 120 guests each, staggered by 20 minutes.</p>
                <p><strong>Buffet zone:</strong> Adjacent area with:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Kerala non veg counter (fish curry, chicken roast, prawn masala)</li>
                    <li>North Indian counter (butter chicken, dal makhani, naan)</li>
                    <li>Live dosa counter</li>
                    <li>Dessert station (payasam plus gulab jamun, ice cream, fruit)</li>
                </ul>
                <p><strong>Timing:</strong> Sadhya service ran from 12:00 to 1:30 PM. Buffet counters opened at 12:15 PM and stayed active until 2:00 PM. Guests could eat Sadhya, then visit the buffet for extras. Or skip the Sadhya and go straight to the buffet. Their choice.</p>
            </div>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/hero.jpg" fill className="object-cover" alt="Hybrid catering setup with Sadhya hall and buffet counters at Ernakulam wedding" />
            </div>

            <div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Live dosa counter at catering event in Kerala" />
            </div>

            <p className="mb-8">
                The family told us afterward that they received more compliments about the food at that wedding than at any other family event. The older guests loved the Sadhya. The younger crowd loved the live counters. Nobody felt like the menu was not "for them." That is the power of a well executed hybrid.
            </p>

            <h3 className="text-2xl font-medium text-[#D4AF37] mt-12 mb-4">Budget Considerations for Hybrid</h3>

            <p className="mb-6">Naturally, a hybrid costs more than either format alone. As a rough guide:</p>

            <div className="overflow-x-auto mb-6 bg-black/5 rounded-xl border border-black/10">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#D4AF37]/10 text-[#D4AF37]">
                            <th className="p-4 border-b border-black/10 font-medium">Format</th>
                            <th className="p-4 border-b border-black/10 font-medium">Per Plate Cost (Kochi, 2024)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-4 border-b border-black/5">Sadhya only (26 dishes)</td>
                            <td className="p-4 border-b border-black/5">Rs. 600 to 950</td>
                        </tr>
                        <tr className="bg-black/5">
                            <td className="p-4 border-b border-black/5">Buffet only (multi cuisine)</td>
                            <td className="p-4 border-b border-black/5">Rs. 700 to 1,200</td>
                        </tr>
                        <tr>
                            <td className="p-4">Hybrid (Sadhya + buffet counters)</td>
                            <td className="p-4 font-medium text-[#D4AF37]">Rs. 1,000 to 1,800</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mb-8 text-gray-700">
                The premium for a hybrid is typically 30 to 50 percent over a single format. But for milestone events like weddings, that extra investment often makes sense because you are eliminating the compromise entirely. <Link href="/blog/kerala-wedding-catering-menu-guide" className="text-[#D4AF37] hover:underline">Check out our full wedding menu planning guide with comprehensive cost tables.</Link>
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/wedding-catering" className="text-[#D4AF37] font-medium hover:underline">
                    Interested in a hybrid setup for your event? Let us design a custom plan. Contact Matzah Caterers.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Making the Decision: A Simple Framework</h2>

            <p className="mb-6">If you are still unsure, ask yourself these five questions:</p>

            <div className="space-y-4 mb-12 border-l-4 border-[#D4AF37] pl-6 py-4">
                <p><strong>1. What is the nature of the event?</strong><br />Traditional ceremony or religious function? Sadhya. Corporate or casual social gathering? Buffet. Wedding with diverse guest list? Hybrid.</p>
                <p><strong>2. Who are your guests?</strong><br />Mostly Malayali family? Sadhya works perfectly. Mixed communities and age groups? Buffet or hybrid gives better coverage.</p>
                <p><strong>3. What does your venue support?</strong><br />Ground seating and covered halls? Sadhya is possible. Open lawns, conference rooms, or rooftops? Buffet is more practical. <Link href="/blog/outdoor-catering-tips-kerala-events" className="text-[#D4AF37] hover:underline">Read our outdoor catering considerations here.</Link></p>
                <p><strong>4. What is your budget per plate?</strong><br />Under Rs. 800? Sadhya is your best value for a cultural event. Rs. 800 to 1,200? Buffet gives great variety. Over Rs. 1,200? A hybrid becomes very doable.</p>
                <p><strong>5. What do you want people to remember?</strong><br />The tradition and beauty of a banana leaf feast? Go Sadhya. The variety and fun of multiple cuisines? Go buffet. Both? Go hybrid.</p>
            </div>

            <p className="mb-8 font-medium">There is no wrong answer. There is only the answer that fits your specific event.</p>

            <h2 className="text-3xl mt-16 mb-6">A Final Thought</h2>

            <p className="mb-6">
                We have served thousands of meals in both formats. Beautiful Sadhya spreads that made grandmothers cry happy tears. Elaborate buffets that turned corporate functions into celebrations people actually enjoyed. Hybrids that brought together families from different states and somehow made everyone feel at home.
            </p>

            <p className="mb-6">
                The format matters. But what matters more is the execution. A mediocre Sadhya is worse than a great buffet. A sloppy buffet is worse than a simple but perfectly served Sadhya. Whatever you choose, choose a team that knows how to deliver it at the level your guests deserve.
            </p>

            <p className="mb-12 font-medium">
                That is what we focus on at Matzah Caterers. Not selling you one format over another. But understanding your event, your people, and your vision, and then building the food experience around that.
            </p>

            <div className="mt-16 bg-black/5 border border-[#D4AF37]/30 rounded-2xl p-10 text-center">
                <h3 className="text-3xl mb-4 text-[#D4AF37]">Ready to figure out the right format for your event? Talk to us.</h3>
                <p className="mb-8 text-lg">We will recommend the perfect setup, whether it is Sadhya, buffet, hybrid, or something you have not even considered yet.</p>
                <p className="font-medium text-lg text-gray-900">
                    📞 <Link href="tel:+918921038043" className="text-[#D4AF37] hover:underline">Call us</Link> or 📩 <Link href="/contact" className="text-[#D4AF37] hover:underline">Share your event details</Link> and let's plan a feast.
                </p>
            </div>
        </>
    );
}
