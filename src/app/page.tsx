"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Beef, Cake, Calendar, ChefHat, Fish, Gift, Heart, Instagram, Facebook, Twitter, Leaf, MessageCircle, Sparkles, Soup, Star, Utensils } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="radialGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Bella Vista"
          button={{
            text: "Book Table",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Experience Fine Dining"
          description="Indulge in our chef's signature dishes crafted with the finest local ingredients in an elegant atmosphere"
          tag="Welcome to Bella Vista"
          tagIcon={Utensils}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g45a6d0f70cf989a97ff8527d12dbf6b126f39281413cc18329b27bb666d0f81f838cb95f7194dafed720da90cd0ef7ab8213595294acb36edfa0c0c9a3eb5aa2_1280.jpg",
              imageAlt: "Elegant restaurant interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g8643c8c150a7c355503dd95af87d58425d07351916cbcf98fad91a68f18da958e71d1e46b15491aa8184ff17f0b1646d9447e6e62e23d07a7e5b7deb53e25984_1280.jpg",
              imageAlt: "Gourmet pasta dish"
            },
            {
              imageSrc: "https://pixabay.com/get/g6968f6b4c35489d7c6adca6fa6e6a7c00e4073d35293a68b94c1425a35d8426668f52f3ea51a2d6503058ed5b04b5e226b9f2d2a719643e7f6478eeba1c48591_1280.jpg",
              imageAlt: "Grilled salmon dinner"
            },
            {
              imageSrc: "https://pixabay.com/get/g39938d29bfb2dcc76f0b21a9415d26085fd496d22fe9b28fd3cc6acbdbe8d89f70c7b49fb662fba364a508e5a4c3fec81192a417d1dd60e71c1faaebfb0d129c_1280.jpg",
              imageAlt: "Chocolate dessert"
            }
          ]}
          buttons={[
            {
              text: "View Menu",
              href: "product"
            },
            {
              text: "Reserve Table",
              href: "contact"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Culinary Story"
          description="For over two decades, Bella Vista has been serving exceptional cuisine in the heart of the city. Our commitment to quality ingredients and innovative cooking techniques has made us a beloved destination for food enthusiasts."
          tag="About Us"
          tagIcon={Heart}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://pixabay.com/get/g45a6d0f70cf989a97ff8527d12dbf6b126f39281413cc18329b27bb666d0f81f838cb95f7194dafed720da90cd0ef7ab8213595294acb36edfa0c0c9a3eb5aa2_1280.jpg"
          imageAlt="Restaurant interior"
          bulletPoints={[
            {
              title: "Fresh Ingredients",
              description: "We source the finest local and seasonal ingredients daily",
              icon: Leaf
            },
            {
              title: "Expert Chefs",
              description: "Our culinary team brings years of experience and passion",
              icon: ChefHat
            },
            {
              title: "Elegant Atmosphere",
              description: "Perfect ambiance for romantic dinners and special occasions",
              icon: Sparkles
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <FeatureCardFive
          title="Signature Dishes"
          description="Discover our chef's carefully crafted specialties"
          tag="Menu Highlights"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          showIconBoxBackground={true}
          features={[
            {
              title: "Truffle Risotto",
              icon: Soup
            },
            {
              title: "Grilled Sea Bass",
              icon: Fish
            },
            {
              title: "Wagyu Steak",
              icon: Beef
            },
            {
              title: "Chocolate Soufflé",
              icon: Cake
            }
          ]}
        />
      </div>

      <div id="product-showcase" data-section="product-showcase">
        <ProductCardOne
          title="Featured Menu Items"
          description="Our most popular dishes loved by guests"
          tag="Chef's Recommendations"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "pasta-special",
              name: "Truffle Pasta",
              price: "$32",
              imageSrc: "https://pixabay.com/get/g8643c8c150a7c355503dd95af87d58425d07351916cbcf98fad91a68f18da958e71d1e46b15491aa8184ff17f0b1646d9447e6e62e23d07a7e5b7deb53e25984_1280.jpg",
              imageAlt: "Truffle pasta dish"
            },
            {
              id: "salmon-dish",
              name: "Grilled Salmon",
              price: "$28",
              imageSrc: "https://pixabay.com/get/g6968f6b4c35489d7c6adca6fa6e6a7c00e4073d35293a68b94c1425a35d8426668f52f3ea51a2d6503058ed5b04b5e226b9f2d2a719643e7f6478eeba1c48591_1280.jpg",
              imageAlt: "Grilled salmon with vegetables"
            },
            {
              id: "chocolate-dessert",
              name: "Chocolate Soufflé",
              price: "$14",
              imageSrc: "https://pixabay.com/get/g39938d29bfb2dcc76f0b21a9415d26085fd496d22fe9b28fd3cc6acbdbe8d89f70c7b49fb662fba364a508e5a4c3fec81192a417d1dd60e71c1faaebfb0d129c_1280.jpg",
              imageAlt: "Chocolate dessert"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Dining Experiences"
          description="Choose from our curated dining packages"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "casual-dining",
              name: "Casual Dining",
              price: "$45",
              features: [
                "3-course meal",
                "House wine selection",
                "Dessert included",
                "Complimentary bread"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "View Menu",
                  href: "product"
                }
              ]
            },
            {
              id: "chef-tasting",
              badge: "Most Popular",
              badgeIcon: Star,
              name: "Chef's Tasting",
              price: "$85",
              features: [
                "7-course tasting menu",
                "Wine pairing included",
                "Chef's special dessert",
                "Amuse bouche"
              ],
              buttons: [
                {
                  text: "Reserve",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "about"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Read reviews from our satisfied customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Food Blogger",
              testimonial: "Absolutely exceptional dining experience! The truffle risotto was heavenly and the service was impeccable. Bella Vista has become my go-to place for special occasions.",
              imageSrc: "https://pixabay.com/get/g5879b9f143718bfa14f32153b00ac6a8b4411fd5ada3f3fc37954c5130c8b95da28f9a13cc188397705aa9cc9869cc54bc1acc9cc23f62f401fc6e264138e2c1_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Local Resident",
              testimonial: "The chef's tasting menu exceeded all expectations. Each course was a work of art, beautifully presented and bursting with flavor. Highly recommend!",
              imageSrc: "https://pixabay.com/get/g32289ccfa4b3bd51fe3016277ed3567f23ec04efb2327e4bd1cd55d66ad0a974549e347bfe477bcc8ea905706b82f0f9fbce5b5a424bdb4dd1c67266704259e4_1280.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Wine Enthusiast",
              testimonial: "Perfect ambiance for our anniversary dinner. The wine selection is outstanding and the staff's knowledge is impressive. A truly memorable evening.",
              imageSrc: "https://pixabay.com/get/g90a58c06c3c3770ae272420c3ec0dfa412a78f939222b6bf556ca979a3d874391bfc099d9cfd8e34c73efa555779599ac365cc0f8e04c16f5eeef4a8dfc5f701_1280.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Executive",
              testimonial: "Bella Vista consistently delivers excellence. Whether it's a business dinner or family celebration, they never disappoint. The attention to detail is remarkable.",
              imageSrc: "https://pixabay.com/get/g7a214ad33a39623c19151ea2c6245e2f3cf3afe6add0b3ed408f27c858ebc2ceebb83ec1bbb8228c4f9af9f2c33030dbdb496d613fd8995b215c6d2d759d2f8c_1280.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Event Planner",
              testimonial: "I've organized numerous events here and the team always goes above and beyond. The food quality and presentation are simply outstanding every single time.",
              imageSrc: "https://pixabay.com/get/g9d3897c0dcefb57d16480007a792b38dc490119ff0bba50a4273e1a7db04c16689eddbb0aa1e08119caeedf200fef43fde951d3097a14f1423e75369044490b5_1280.jpg",
              imageAlt: "Lisa Thompson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Table Today"
          description="Experience our exceptional cuisine and warm hospitality. Reserve your table now for an unforgettable dining experience."
          tagIcon={Calendar}
          imageSrc="https://pixabay.com/get/g4bee57a3266337dfb22eb6a80d1c0c0788f0b1b2f4fe00faf9bbec970edc554516b32dc762546bc303a71d6818770128f31c6bc741621a1d73909303bfd7b64f_1280.jpg"
          imageAlt="Restaurant exterior in evening"
          mediaPosition="right"
          inputPlaceholder="Your email address"
          buttonText="Reserve Now"
          termsText="By making a reservation, you agree to our booking terms and cancellation policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Bella Vista"
          copyrightText="© 2025 Bella Vista Restaurant. All rights reserved."
          columns={[
            {
              title: "Restaurant",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Menu",
                  href: "product"
                },
                {
                  label: "Reservations",
                  href: "contact"
                }
              ]
            },
            {
              title: "Information",
              items: [
                {
                  label: "Hours & Location",
                  href: "contact"
                },
                {
                  label: "Private Dining",
                  href: "pricing"
                },
                {
                  label: "Gift Cards",
                  href: "pricing"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/bellavista",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/bellavista",
              ariaLabel: "Like us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/bellavista",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}