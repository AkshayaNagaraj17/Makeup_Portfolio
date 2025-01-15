const Service = require('../../../models/Service')

// Add a new service
const addService = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const service = await Service.create({
      name,
      description,
      price,
    });

    res.status(201).json({
      message: 'Service added successfully',
      service,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error adding service',
      error: error.message,
    });
  }
};

// Update a service
const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true }
    );

    res.status(200).json({
      message: 'Service updated successfully',
      updatedService,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error updating service',
      error: error.message,
    });
  }
};

// Delete a service
const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    await Service.findByIdAndDelete(id);

    res.status(200).json({
      message: 'Service deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error deleting service',
      error: error.message,
    });
  }
};

module.exports = {
  addService,
  updateService,
  deleteService,
};
