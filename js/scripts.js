$(document).ready(function () {
	// add pet
	$(".btn-add").click(function () {
		if ($("#pet-name").val() == "") {
			alert("pet name must have a value");
			return false;
		}
		let new_pet = ``;
		new_pet += `<div class="pet-info">`;
		new_pet += `	<p>${$("#pet-name").val()}</p>`;
		new_pet += `	<p>${$("#pet-type").val()}</p>`;
		new_pet += `	<div class="action">`;
		new_pet += `		<a href=""  role="button" class="detailsPet-open-modal" data-toggle="modal" data-target=".detailsPet"><i class="far fa-list-alt"></i> Details</a>`;
		new_pet += `		<a ref="#" role="button" data-toggle="modal" class="editPet-open-modal" data-target=".editPet"><i class="fas fa-pen-square"></i> Edit</a>`;
		new_pet += `	</div>`;
		new_pet += `</div>`;

		$(".added-pet-name").html($("#pet-name").val());

		$("#pet-name").val("");
		$("#pet-type").val($("#pet-type option:first").val());

		$(".pet-lists").prepend(new_pet);
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

		console.log($(".pet-lists").children().data());
	});
});
