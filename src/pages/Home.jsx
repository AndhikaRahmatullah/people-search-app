import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingAnimation from "../components/LoadingAnimation";
import { useStore } from "../context/useStore";
import { fullData, detailData } from "../services/dataAPI";
import { capitalizeFirstLetter, uppercase, lowercase } from "../utils/stringMethod";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { motion } from "framer-motion";
import "../styles/home.css";

const Home = () => {
	const [optionsSelect, setOptionsSelect] = useState([]);
	const { dataPerson, isLoading, ChangeStateDataPerson, ChangeStateLoading } = useStore();

	// fetching data for options select
	const fetchingData = async () => {
		const person = await fullData();
		let result = person.map((d) => {
			return {
				value: `${d.firstName} ${d.lastName}`,
				label: `${d.firstName} ${d.lastName}`,
				id: d.id,
			};
		});
		setOptionsSelect(result.sort((a, b) => a.label.localeCompare(b.label)));
	};

	useEffect(() => {
		fetchingData();
	}, []);

	// options styles react-select
	const optionsStyles = {
		singleValue: (provided) => ({
			...provided,
			color: "#D01110",
		}),

		option: (styles, { data, isDisabled, isFocused, isSelected }) => {
			return {
				...styles,
				color: isSelected ? "#D01110" : "#0A0A00",
			};
		},
	};

	const {
		register,
		control,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (props) => {
		const { fullName } = props;
		ChangeStateLoading(true);
		try {
			const selected = await detailData(fullName.id);
			ChangeStateDataPerson(selected);
		} catch (error) {
			alert(error);
		}
		ChangeStateLoading(false);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5, ease: "linear" }}
			className="home">
			<form onSubmit={handleSubmit(onSubmit)}>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 2, ease: "linear" }}>
					<label>Find someone</label>

					<Controller
						name="fullName"
						control={control}
						rules={{ required: true }}
						render={({ field }) => (
							<Select
								{...field}
								styles={optionsStyles}
								theme={(theme) => ({
									...theme,
									borderRadius: 5,
									colors: {
										...theme.colors,
										primary25: "#EBE8E0",
										primary: "#0A0A00",
									},
								})}
								options={optionsSelect}
							/>
						)}
					/>

					{errors.fullName?.type === "required" && <span role="alert">Please choose one.</span>}
				</motion.div>

				<div>
					<button
						disabled={isLoading}
						type="submit">
						Search
					</button>
				</div>
			</form>

			{/* data from a specific individual */}
			<div>
				{isLoading ? (
					<LoadingAnimation color={"#D01110"} />
				) : (
					dataPerson.id && (
						<div className="card">
							<p>
								{uppercase(dataPerson.firstName)} {uppercase(dataPerson.lastName)} ({dataPerson.age})
							</p>
							<img
								src={dataPerson.gender === "male" ? "https://img.icons8.com/ios-glyphs/256/user-male.png" : "https://img.icons8.com/ios-glyphs/256/user-female.png"}
								alt="profil-image"
							/>
							<p>{capitalizeFirstLetter(dataPerson.gender)}</p>
							<p>{dataPerson.ip}</p>
							<Link to={`/${lowercase(`${dataPerson.firstName}-${dataPerson.lastName}`)}`}>Detail Person</Link>
						</div>
					)
				)}
			</div>
		</motion.div>
	);
};

export default Home;
