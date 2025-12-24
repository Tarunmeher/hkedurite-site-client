export default function TeacherSkill() {
    return (
        <div className="flex flex-col container mx-auto p-16 md:flex-row gap-10 mt-10">
            {/* Biography Section */}
            <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Biography</h2>
                <p className="text-gray-600">
                    Sed ut perspiciatis unde omnis totam rem chiotecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                    quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
            </div>

            {/* Professional Skills Section */}
            <div className="md:w-1/2">
                <h2 className="text-xl font-bold mb-4">Professional Skills</h2>

                <div className="mb-4">
                    <p className="font-semibold text-sm">COMMUNICATION</p>
                    <div className="relative w-full bg-gray-200 h-2 rounded-full">
                        <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                    <p className="text-sm text-orange-500 mt-1 text-right">85%</p>
                </div>

                <div className="mb-4">
                    <p className="font-semibold text-sm">RELATIONSHIP</p>
                    <div className="relative w-full bg-gray-200 h-2 rounded-full">
                        <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-sm text-orange-500 mt-1 text-right">65%</p>
                </div>

                <div>
                    <p className="font-semibold text-sm">CREATIVE WORK</p>
                    <div className="relative w-full bg-gray-200 h-2 rounded-full">
                        <div className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                    <p className="text-sm text-orange-500 mt-1 text-right">75%</p>
                </div>
            </div>
        </div>
    );
}
