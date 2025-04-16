import React from "react";
import { Button, Input } from "@material-tailwind/react";

const NewsletterSection = () => {
    return (
        <div className="h-screen bg-[#fffcf1] py-10 flex items-center">
            <div className='  container mx-auto lg:px-20'>
                <section className="bg-[#121212] text-white  py-14 rounded-2xl max-w-4xl mx-auto text-center">
                    <p className="text-sm mb-2 text-gray-400">Join Our Community</p>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Subscribe To Our{" "}
                        <span className="relative inline-block">
                            Newsletter
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-lime-400 -z-10"></span>
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm">
                        But I must explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born.
                    </p>

                    <form className="flex items-center justify-center gap-2 border border-gray-400 rounded-full p-2 max-w-md mx-auto">
                        <div className="flex-1 rounded-full px-4 py-1">
                            <input
                                type="email"
                                placeholder="Enter your E-mail"
                                className="w-full h-full bg-transparent  outline-none text-white text-sm"
                            />
                        </div>
                        <Button className="bg-lime-400 text-black rounded-full px-4 py-2 text-sm shadow-none">
                            Get Started
                        </Button>
                    </form>
                </section>
            </div>
        </div>

    );
};

export default NewsletterSection;
