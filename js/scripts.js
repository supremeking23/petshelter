$(document).ready(function () {
	// laod pets
	let all_pets = [
		{
			id: 1,
			pet_name: "Garfield",
			pet_type: "Cat",
		},
		{
			id: 2,
			pet_name: "Doreamon",
			pet_type: "Cat",
		},
		{
			id: 3,
			pet_name: "Snoopy",
			pet_type: "Dog",
		},
		{
			id: 4,
			pet_name: "Daffy",
			pet_type: "Duck",
		},
		{
			id: 5,
			pet_name: "Pen Pen",
			pet_type: "Penguin",
		},
	];

	function load_pets() {
		let pets = ``;
		for (let i = all_pets.length - 1; i >= 0; i--) {
			pets += `<div class="pet-info" data-pet="${all_pets[i].pet_name}">`;
			pets += `	<p>${all_pets[i].pet_name}</p>`;
			pets += `	<p>${all_pets[i].pet_type}</p>`;
			pets += `	<div class="action">`;
			pets += `		<a href="#" role="button" class="detailsPet-open-modal" data-toggle="modal" data-target=".detailsPet"><i class="far fa-list-alt"></i> Details</a>`;
			pets += `		<a href="#" role="button" data-toggle="modal" class="editPet-open-modal" data-target=".editPet"><i class="fas fa-pen-square"></i> Edit</a>`;
			pets += `	</div>`;
			pets += `</div>`;
		}

		$(".pet-lists").html(pets);
	}

	load_pets();

	//////////////////////////////////////////////////////////////////////////
	// add pet
	$(".btn-add").click(function () {
		if ($("#pet-name").val() == "") {
			alert("pet name must have a value");
			return false;
		}

		let new_pet = {
			id: all_pets.length + 1,
			pet_name: $("#pet-name").val(),
			pet_type: $("#pet-type").val(),
		};

		all_pets.push(new_pet);

		load_pets();

		$(".added-pet-name").html($("#pet-name").val());

		$("#pet-name").val("");
		$("#pet-type").val($("#pet-type option:first").val());

		$(".toast").toast("show");
	});

	$(document).on("click", ".detailsPet-open-modal", function (e) {
		e.preventDefault();
		// alert("sdsd");
		console.log($(this).parent().siblings()[0].innerHTML);
		$(".detailsPet .modal-dialog .modal-content .modal-header .modal-title .pet-name").html($(this).parent().siblings()[0].innerHTML);
		$(".detailsPet .modal-dialog .modal-content .modal-body .pet-type").html($(this).parent().siblings()[1].innerHTML);
	});

	$(document).on("click", ".editPet-open-modal", function (e) {
		e.preventDefault();
		// alert("sdsd");
		// console.log($(this).parent().siblings()[0].innerHTML);
		$(".editPet .modal-dialog .modal-content .modal-header .modal-title .pet-name").html($(this).parent().siblings()[0].innerHTML);
		// $(".editPet .modal-dialog .modal-content .modal-body .pet-type").html(`<option>ivan</option>`);
		$(`.editPet .modal-dialog .modal-content .modal-body .pet-type option:contains("${$(this).parent().siblings()[1].innerHTML}")`).prop(
			"selected",
			true
		);
		console.log($(this).parent().siblings()[1].innerHTML);
	});

	$(document).on("click", ".btn-update", function () {
		// alert("edit");
		// console.log($(".editPet .modal-dialog .modal-content .modal-header .modal-title .pet-name").html());
		let pet_to_edit = $(".editPet .modal-dialog .modal-content .modal-header .modal-title .pet-name").html();

		for (let i = 0; i < all_pets.length; i++) {
			if (pet_to_edit == all_pets[i].pet_name) {
				all_pets[i].pet_type = $(`#pet-type-edit`).val();
			}
		}

		load_pets();

		// console.log($(".pet-lists").children().data());
	});
});
