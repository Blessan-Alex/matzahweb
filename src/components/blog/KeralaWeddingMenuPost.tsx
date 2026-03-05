import Image from "next/image";
import Link from "next/link";

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does wedding catering cost in Kerala?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Wedding catering costs in Kochi range from Rs. 450 to 650 per plate for a basic Sadhya, to Rs. 1,200 to 2,000+ for a premium multi-cuisine buffet with live counters."
            }
        },
        {
            "@type": "Question",
            "name": "How many dishes are in a Kerala wedding Sadhya?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A full, traditional Kerala wedding Sadhya typically includes 24 to 28 distinct dishes, ranging from the foundation of rice and ghee to various curries, accompaniments, and desserts like payasam."
            }
        }
    ]
};

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Kerala Wedding Sadhya Dishes",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Choru (Rice)" },
        { "@type": "ListItem", "position": 2, "name": "Ghee" },
        { "@type": "ListItem", "position": 3, "name": "Parippu Curry" },
        { "@type": "ListItem", "position": 4, "name": "Sambar" },
        { "@type": "ListItem", "position": 5, "name": "Rasam" },
        { "@type": "ListItem", "position": 6, "name": "Avial" },
        { "@type": "ListItem", "position": 7, "name": "Thoran" },
        { "@type": "ListItem", "position": 8, "name": "Olan" },
        { "@type": "ListItem", "position": 9, "name": "Koottukari" },
        { "@type": "ListItem", "position": 10, "name": "Kurukku Kaalan" },
        { "@type": "ListItem", "position": 11, "name": "Pulissery" },
        { "@type": "ListItem", "position": 12, "name": "Pachadi" },
        { "@type": "ListItem", "position": 13, "name": "Mezhukkupuratti" },
        { "@type": "ListItem", "position": 14, "name": "Erissery" },
        { "@type": "ListItem", "position": 15, "name": "Pappadam" },
        { "@type": "ListItem", "position": 16, "name": "Banana chips (Upperi)" },
        { "@type": "ListItem", "position": 17, "name": "Pickles" },
        { "@type": "ListItem", "position": 18, "name": "Banana" },
        { "@type": "ListItem", "position": 19, "name": "Buttermilk (Sambaram)" },
        { "@type": "ListItem", "position": 20, "name": "Payasam" }
    ]
};

export default function KeralaWeddingMenuPost() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
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

            <p className="mb-6">Let us be honest about something.</p>

            <p className="mb-6">
                The music at your wedding, people will forget. The decorations, they will appreciate in the moment and maybe scroll past later in photos. But the food? The food is what everyone remembers. It is what people talk about on the drive home. It is what your relatives will bring up at every family gathering for the next five years.
            </p>

            <p className="mb-6 italic text-gray-700 pl-4 border-l-2 border-[#D4AF37]">
                "Remember that aviyal at Priya's wedding? Unbelievable."<br />
                "The payasam at the Thrikkakara reception, I still think about it."
            </p>

            <p className="mb-6">
                That is the power of a great wedding catering menu. In Kerala, where food is not just sustenance but a love language passed down through generations, getting your wedding menu right is probably the single most important decision you will make after choosing who to marry.
            </p>

            <p className="mb-6">
                And yet, it is also one of the most confusing parts of wedding planning. How many dishes should you include? Should you stick with a traditional Sadhya or mix in other cuisines? What about that cousin who only eats North Indian? How do you keep costs under control without making things feel cheap?
            </p>

            <p className="mb-6">
                We have spent years answering these exact questions for couples across Kochi, Ernakulam, Thrissur, and all over Kerala. This guide is everything we know, laid out simply so you can design a wedding menu that feels like you, feeds everyone well, and stays within budget.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/wedding-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">
                    Looking for a partner to bring your wedding menu to life? Explore our Wedding Catering Services in Kochi.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">The Core Sadhya Menu: Where Tradition Meets Celebration</h2>

            <p className="mb-6">
                If you are having a Kerala wedding, the Sadhya is the heart of it. There is really no way around it. Even couples who want a modern, multi cuisine spread almost always include a Sadhya component because it connects the celebration to something deeper. It is cultural identity served on a banana leaf.
            </p>

            <p className="mb-8">
                A complete wedding Sadhya typically includes 24 to 28 dishes, each placed at a specific spot on the leaf. This is not random. There is a logic to how the meal unfolds, and experienced caterers know the sequence by heart.
            </p>

            <p className="mb-8">Here is what a proper wedding Sadhya menu looks like:</p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Foundation</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Choru (Rice):</strong> Kerala matta rice or white rice, served in two rounds. The foundation everything else builds on.</li>
                <li><strong>Ghee:</strong> A small pool of pure ghee on the rice. This is where the meal begins. Ghee, rice, and parippu. Simple. Perfect.</li>
                <li><strong>Parippu Curry:</strong> Toor dal cooked with coconut and tempered with mustard seeds. The first thing guests eat.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Curries and Sides</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Sambar:</strong> Thick, rich, loaded with drumstick and vegetables. Wedding sambar should have depth, not just heat.</li>
                <li><strong>Rasam:</strong> Peppery, tangy, served in the second round with rice. Cuts through the richness of everything else.</li>
                <li><strong>Avial:</strong> Mixed vegetables in coconut and yogurt. This is the signature dish of any Sadhya. If the avial is good, people trust the rest.</li>
                <li><strong>Thoran:</strong> Finely chopped cabbage or beans with grated coconut. Dry, crunchy, and essential for texture contrast.</li>
                <li><strong>Olan:</strong> Ash gourd and cowpeas in thin coconut milk. Gentle and subtle. The quiet one on the leaf that you notice only when it is missing.</li>
                <li><strong>Koottukari:</strong> Black chickpeas and raw banana in coconut gravy. Mildly sweet, deeply satisfying.</li>
                <li><strong>Kurukku Kaalan:</strong> Yam and raw banana in thick yogurt and coconut gravy. Creamy, cooling, and one of the dishes that separates a good Sadhya from a great one.</li>
                <li><strong>Pulissery:</strong> Ripe mango or ash gourd in a sour yogurt gravy. A perfect palate cleanser.</li>
                <li><strong>Pachadi:</strong> Pineapple or cucumber in seasoned yogurt. Cool, sweet, tangy all at once.</li>
                <li><strong>Mezhukkupuratti:</strong> Banana stir fry with minimal spices. Simple, delicious, and often underestimated.</li>
                <li><strong>Erissery:</strong> Pumpkin and lentil cooked in roasted coconut paste. Earthy, grounding, wonderful.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Accompaniments</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Pappadam:</strong> Crispy, fresh, never stale. You need at least four per guest because people keep reaching for more.</li>
                <li><strong>Banana chips (Upperi):</strong> Fried in coconut oil. Crunchy and slightly salty.</li>
                <li><strong>Pickles:</strong> Mango pickle and lime pickle. Both should have real heat and tang.</li>
                <li><strong>Banana:</strong> Ripe nendran banana. Eaten toward the end of the meal.</li>
                <li><strong>Buttermilk (Sambaram):</strong> Served last. Spiced, cool, and the perfect finish.</li>
            </ul>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_sadhya.png" fill className="object-cover" alt="Full Kerala Sadhya spread on banana leaf at wedding in Kochi" />
            </div>

            <h3 className="text-2xl font-medium text-[#D4AF37] mt-12 mb-4">The Grand Finale</h3>
            <p className="mb-6">
                <strong>Payasam:</strong> Minimum two varieties. Palada pradhaman is the traditional star. Parippu pradhaman (moong dal based) is the second most popular. Semiya payasam works beautifully as a third option. For weddings with bigger budgets, some families add a fourth: pal payasam or adapradhaman.
            </p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_traditional.png" fill className="object-cover" alt="Three varieties of payasam served at Kerala wedding feast" />
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Popular Add Ons for a Kerala Wedding Sadhya</h3>
            <p className="mb-4">
                Many families now include non vegetarian dishes alongside the traditional vegetarian Sadhya. These are usually served separately, either as a side or at a dedicated counter:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Fish curry</strong> (meen curry with raw mango or kokum)</li>
                <li><strong>Prawn masala</strong> or <strong>prawn theeyal</strong></li>
                <li><strong>Chicken roast</strong> (Kerala style with thick masala)</li>
                <li><strong>Kappa biryani</strong> (tapioca based, a Central Kerala specialty that has become incredibly popular)</li>
                <li><strong>Duck roast</strong> (for those wanting something extra special)</li>
            </ul>
            <p className="mb-8 font-medium">
                These add ons do not replace the Sadhya. They complement it. And they give non vegetarian guests something to get excited about alongside the traditional spread.
            </p>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/kerala-sadhya-catering" className="text-[#D4AF37] font-medium hover:underline">
                    Want a custom Sadhya menu for your wedding? Talk to our team about Kerala Sadhya Catering.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Multi Cuisine Options: When You Want More Than Just Sadhya</h2>
            <p className="mb-6">
                Here is the reality of modern Kerala weddings. Your guest list is diverse. You have got family members who grew up eating Sadhya every Onam, and you have got friends who would rather have biryani and kebabs. You might have colleagues from other states who have never seen a banana leaf meal in their lives.
            </p>
            <p className="mb-8">A smart wedding menu acknowledges all of this.</p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/kerala_event_setting.png" fill className="object-cover" alt="Live dosa counter at Kerala wedding reception Kochi" />
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Live Counters</h3>
            <p className="mb-4">
                Live counters have become one of the most popular additions to Kerala wedding receptions, and for good reason. There is something exciting about watching food being made fresh right in front of you.
            </p>
            <p className="mb-4">Options that work really well:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Dosa counter:</strong> Mini dosas with an assortment of chutneys. Always draws a crowd.</li>
                <li><strong>Chaat counter:</strong> Pani puri, bhel puri, dahi puri. Great as a starter while guests mingle.</li>
                <li><strong>Chinese counter:</strong> Hakka noodles, fried rice, manchurian. It sounds out of place at a Kerala wedding, but honestly, this counter is always one of the busiest.</li>
                <li><strong>Pasta or Italian counter:</strong> Increasingly popular at urban Kochi weddings.</li>
                <li><strong>Juice and smoothie bar:</strong> Fresh tender coconut water, fruit smoothies, and mocktails.</li>
            </ul>
            <p className="mb-8 italic text-gray-700 pl-4 border-l-2 border-black/10">
                Each live counter typically needs one to two dedicated staff members and a compact setup of about 6 to 8 feet of table space.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Themed Additions</h3>
            <p className="mb-4">Some couples go further and add themed food sections:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Arabian corner:</strong> Shawarma, hummus, grilled meats. Very popular in Kochi and Kozhikode.</li>
                <li><strong>Kerala street food section:</strong> Pazhampori (banana fritters), sukhiyan, unniyappam, and egg puffs.</li>
                <li><strong>Dessert station:</strong> Beyond payasam, think kulfi, ice cream, brownie bites, and fresh fruit platters.</li>
            </ul>

            <p className="mb-4 font-medium text-[#D4AF37]">
                The key with multi cuisine setups is not to overdo it. Three to four additional counters alongside the main Sadhya is the sweet spot. More than that and you start spreading your budget thin, and the quality of individual dishes can suffer.
            </p>
            <p className="mb-12">
                We have seen weddings with 15 different food stations where nothing was particularly memorable. And we have seen weddings with a stunning Sadhya and two well executed live counters where guests could not stop raving. Focused and excellent beats scattered and average, every single time.
            </p>

            <h2 className="text-3xl mt-16 mb-6">Budget Planning and Guest Management</h2>
            <p className="mb-6">Let us talk money. Because no matter how beautiful your menu looks on paper, it needs to fit your budget.</p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/menu_buffet.png" fill className="object-cover" alt="Multi cuisine buffet setup at wedding event Ernakulam" />
            </div>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Cost Ranges for Kerala Wedding Catering</h3>
            <p className="mb-6">Here is a realistic breakdown of what wedding catering costs in Kochi and surrounding areas as of 2024 to 2025:</p>

            <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse border border-black/10">
                    <thead>
                        <tr className="border-b border-black/10 bg-black/5">
                            <th className="py-4 px-4 font-medium text-gray-900">Menu Type</th>
                            <th className="py-4 px-4 font-medium text-gray-900">Cost Per Plate (Approximate)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-black/10">
                        <tr><td className="py-3 px-4">Basic Sadhya (20 to 22 dishes)</td><td className="py-3 px-4 text-[#D4AF37]">Rs. 450 to 650</td></tr>
                        <tr><td className="py-3 px-4">Full Sadhya (26 to 28 dishes + payasam)</td><td className="py-3 px-4 text-[#D4AF37]">Rs. 700 to 950</td></tr>
                        <tr><td className="py-3 px-4">Sadhya + Non Veg sides</td><td className="py-3 px-4 text-[#D4AF37]">Rs. 900 to 1,200</td></tr>
                        <tr><td className="py-3 px-4">Multi cuisine buffet (veg + non veg)</td><td className="py-3 px-4 text-[#D4AF37]">Rs. 800 to 1,500</td></tr>
                        <tr><td className="py-3 px-4">Premium with live counters</td><td className="py-3 px-4 text-[#D4AF37]">Rs. 1,200 to 2,000+</td></tr>
                    </tbody>
                </table>
            </div>
            <p className="mb-8 italic text-gray-700">
                These numbers vary based on the number of dishes, ingredient quality, venue location, and the number of guests. Urban Kochi venues tend to cost slightly more than events in Aluva or Perumbavoor because of logistics.
            </p>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">The Buffer Rule</h3>
            <p className="mb-4">Always plan for more food than your exact headcount. Always.</p>
            <p className="mb-4">Our recommendation: prepare for 1.5 times your confirmed guest count, or at minimum add 15 to 20 percent on top.</p>
            <p className="mb-4">Why? Because:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
                <li>Last minute additions are guaranteed. Relatives you did not expect, friends of friends, neighbors. It happens at every Kerala wedding.</li>
                <li>Some dishes get consumed faster than planned. Biryani and payasam always go quicker than you think.</li>
                <li>Running out of food at a wedding is the one thing you absolutely cannot afford. A little leftover is infinitely better than a guest finding an empty serving vessel.</li>
            </ul>

            <h3 className="text-2xl font-medium text-gray-900 mt-12 mb-4">Smart Budget Tips</h3>
            <p className="mb-4">A few ways to keep costs reasonable without compromising on quality:</p>
            <ul className="space-y-4 mb-12">
                <li className="flex flex-col">
                    <strong className="text-gray-900">Choose seasonal vegetables.</strong>
                    <span className="text-gray-700">If your wedding is during monsoon, ash gourd and drumstick are abundant and cheap. Build your Sadhya around what is fresh and available.</span>
                </li>
                <li className="flex flex-col">
                    <strong className="text-gray-900">Limit non veg varieties.</strong>
                    <span className="text-gray-700">Instead of five different non veg dishes, pick two or three and do them really well. A perfectly executed fish curry and chicken roast will impress more than five mediocre options.</span>
                </li>
                <li className="flex flex-col">
                    <strong className="text-gray-900">Opt for fewer live counters but do them right.</strong>
                    <span className="text-gray-700">One incredible dosa counter is better than three half hearted stations.</span>
                </li>
                <li className="flex flex-col">
                    <strong className="text-gray-900">Discuss portion control with your caterer.</strong>
                    <span className="text-gray-700">Experienced caterers know exactly how much of each dish to prepare. Trust their numbers rather than guessing yourself.</span>
                </li>
                <li className="flex flex-col">
                    <strong className="text-gray-900">Book early.</strong>
                    <span className="text-gray-700">During peak wedding season in Kerala (November to February), caterers are in high demand. Booking three to four months ahead often gets you better rates and more attention.</span>
                </li>
            </ul>


            <h2 className="text-3xl mt-16 mb-6">Designing Your Menu: A Step by Step Approach</h2>
            <p className="mb-6">If you are feeling overwhelmed, here is a simple framework we walk our clients through:</p>

            <div className="relative w-full h-[400px] my-12 rounded-xl overflow-hidden bg-black/5">
                <Image src="/composed_hospitality_staff.png" fill className="object-cover" alt="Couple discussing wedding catering menu with caterer Kochi" />
            </div>

            <div className="space-y-6 bg-black/5 p-6 rounded-xl border border-black/10 mb-12">
                <div>
                    <strong className="text-[#D4AF37]">Step 1: Decide your format.</strong> Pure Sadhya? Sadhya plus non veg? Multi cuisine buffet? This single decision shapes everything else.
                </div>
                <div>
                    <strong className="text-[#D4AF37]">Step 2: Set your budget per plate.</strong> Be realistic. Share this number with your caterer upfront so they can design within your range.
                </div>
                <div>
                    <strong className="text-[#D4AF37]">Step 3: Estimate your guest count.</strong> Then add the buffer. If you expect 300, plan food for 350 to 360.
                </div>
                <div>
                    <strong className="text-[#D4AF37]">Step 4: Choose your hero dishes.</strong> Every wedding menu should have two or three standout items that people will remember. Maybe it is a special payasam recipe, or a prawn dish your family is known for, or a live counter that surprises guests.
                </div>
                <div>
                    <strong className="text-[#D4AF37]">Step 5: Do a tasting.</strong> This is non negotiable for weddings. Visit your caterer, taste the key dishes, and give feedback. A tasting session is where you move from a list on paper to confidence in your choice.
                </div>
                <div>
                    <strong className="text-[#D4AF37]">Step 6: Finalize and confirm.</strong> Lock in the menu at least two to three weeks before the wedding. This gives your caterer time to source ingredients and plan logistics without last minute scrambling.
                </div>
            </div>

            <div className="bg-black/5 p-6 rounded-lg my-8 border border-[#D4AF37]/30">
                <Link href="/services/wedding-catering-kochi" className="text-[#D4AF37] font-medium hover:underline">
                    Ready to start designing your wedding menu? Contact Matzah Caterers for a free consultation and tasting.
                </Link>
            </div>

            <h2 className="text-3xl mt-16 mb-6">Your Wedding Menu Is Your Signature</h2>
            <p className="mb-6">
                A few months ago, a couple in Kochi came to us with what they called an "impossible brief." They wanted a full 26 dish Sadhya for 400 guests, a separate non veg buffet with Kerala and North Indian options, two live counters, and a dessert station. And they wanted it all to feel seamless, not chaotic.
            </p>
            <p className="mb-6">
                We sat down together, mapped out the menu item by item, ran the numbers, did two tasting sessions, and adjusted dishes based on their feedback. On the wedding day, everything flowed exactly as planned. The Sadhya was served on time, the live counters ran without interruptions, and the payasam was still warm and fresh when the last guest sat down to eat.
            </p>
            <p className="mb-6">
                After the wedding, the groom's mother said something that stuck with us: <strong>"The food felt like our family made it, just for a lot more people."</strong>
            </p>
            <p className="mb-12 font-medium">
                That is what great wedding catering should feel like. Not a transaction. Not a service. It should feel like an extension of your family's hospitality, scaled up with precision and care.
            </p>

            <div className="mt-16 bg-black/5 border border-[#D4AF37]/30 rounded-2xl p-10 text-center">
                <h3 className="text-3xl mb-4 text-[#D4AF37]">Ready to start designing your wedding menu?</h3>
                <p className="mb-8 text-lg">Whatever your wedding looks like, however many guests you are inviting, whatever your budget, there is a menu that is perfect for you. Let us help you find it.</p>
                <p className="mb-6 font-medium text-xl text-gray-900">Contact Matzah Caterers for a free consultation and tasting.</p>
                <p className="font-medium text-lg">
                    📞 <Link href="tel:+918921038043" className="text-[#D4AF37] hover:underline">Call us</Link> or 📩 <Link href="/contact" className="text-[#D4AF37] hover:underline">Share your wedding details</Link> and let us build your menu together.
                </p>
            </div>

        </>
    );
}
