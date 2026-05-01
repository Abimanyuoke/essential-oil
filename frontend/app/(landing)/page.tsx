import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import BannerHero from "./_sections/banner-hero";
import ProductsSection from "./_sections/products";
import PartnersSection from "./_sections/partners";
import TestimonialsSection from "./_sections/testimonials";
import AboutUsSection from "./_sections/about-us";
import NewsletterSection from "./_sections/newsletter";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <BannerHero />
                <section className="container mx-auto px-5">
                    <ProductsSection />
                </section>
                <section className="container mx-auto px-5">
                    <PartnersSection />
                </section>
                <TestimonialsSection />
                <section className="container mx-auto px-5">
                    <AboutUsSection />
                </section>
                <NewsletterSection />
            </main>
            <Footer />
        </div>
    );
}
