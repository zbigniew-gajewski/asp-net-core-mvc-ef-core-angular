namespace Bau.Data
{
    using AutoMapper;
    using Bau.Data.Entities;
    using Bau.ViewModels;

    public class BauMappingProfile : Profile
    {
        public BauMappingProfile()
        {
            CreateMap<Engineer, EngineerViewModel>();
            CreateMap<EngineerViewModel, Engineer>().ForMember(p => p.PlanItems, opt => opt.Ignore());
        }
    }
}
