import React from "react";
import { useStore } from "../context/useStore";
import { capitalizeFirstLetter } from "../utils/stringMethod";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import "../styles/detailPerson.css";

const DetailPerson = () => {
	const { dataPerson } = useStore();
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5, ease: "linear" }}
			className="detail-person">
			<div>
				<div>
					<img
						src={dataPerson.gender === "male" ? "https://img.icons8.com/ios-glyphs/256/user-male.png" : "https://img.icons8.com/ios-glyphs/256/user-female.png"}
						alt="profil-image"
					/>

					<p>
						{dataPerson.firstName} {dataPerson.lastName}
					</p>
				</div>

				<div>
					<p>
						ID :{" "}
						<TypeAnimation
							sequence={["", 1000, `${dataPerson.id}`]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Date Of Birth :{" "}
						<TypeAnimation
							sequence={["", 2000, `${dataPerson.birthDate}`]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Blood Group :{" "}
						<TypeAnimation
							sequence={["", 3000, `${dataPerson.bloodGroup}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Address :{" "}
						<TypeAnimation
							sequence={["", 4000, `${dataPerson.address.address}, ${dataPerson.address.city}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Age :{" "}
						<TypeAnimation
							sequence={["", 6000, `${dataPerson.age}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Gender :{" "}
						<TypeAnimation
							sequence={["", 7000, `${capitalizeFirstLetter(dataPerson.gender)}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Email :{" "}
						<TypeAnimation
							sequence={["", 8000, `${dataPerson.email}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Phone Number :{" "}
						<TypeAnimation
							sequence={["", 10000, `${dataPerson.phone}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						IP Address :{" "}
						<TypeAnimation
							sequence={["", 12000, `${dataPerson.ip}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Height :{" "}
						<TypeAnimation
							sequence={["", 13000, `${dataPerson.height}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Weight :{" "}
						<TypeAnimation
							sequence={["", 14000, `${dataPerson.weight}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						University :{" "}
						<TypeAnimation
							sequence={["", 15000, `${dataPerson.university}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Company Name :{" "}
						<TypeAnimation
							sequence={["", 17000, `${dataPerson.company.name}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Company Address :{" "}
						<TypeAnimation
							sequence={["", 19000, `${dataPerson.company.address.address}, ${dataPerson.company.address.city}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>

					<p>
						Job :{" "}
						<TypeAnimation
							sequence={["", 21000, `${dataPerson.company.title}`, 1000]}
							speed={2}
							wrapper="span"
							repeat={0}
							cursor={false}
						/>
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default DetailPerson;
