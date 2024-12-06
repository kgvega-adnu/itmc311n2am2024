from django import forms
from django.contrib.auth.models import User
from .models import *

class announcementForm(forms.ModelForm):
    class Meta:
        model = Announcements
        fields = ['Announce_header', 'Announce_body']  
        widgets = {
            'Announce_header': forms.TextInput(attrs={'class': 'form-control w-75 form-control-lg'}),
            'Announce_body': forms.Textarea(attrs={'class': 'form-control w-100', 'rows': 5}),  
        }

class reportForm(forms.ModelForm):
    class Meta:
        model = Reports
        fields = ['Reports_header', 'Reports_body']
        widgets = {
            'Reports_header': forms.TextInput(attrs={'class': 'form-control w-75 form-control-lg'}),
            'Reports_body': forms.Textarea(attrs={'class': 'form-control w-100', 'rows': 5}),  
        }

class ownerRegForm (forms.ModelForm):
    password = forms.CharField(
        widget= forms.PasswordInput(attrs={
            'class': 'form-control-sm',
            'id': 'floatingInput',
            'placeholder': 'Password'
            }),
            label="Password"
        )
    password_confirm = forms.CharField(
        widget= forms.PasswordInput(attrs={
            'class': 'form-control-sm',
            'id': 'floatingInput',
            'placeholder': 'Confirm Password'
            }),
            label="Confirm Password"
        )

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phonenumber']
        widgets = {
            'first_name': forms.TextInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'First Name'
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'Last Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'Email'
            }), 
            'phonenumber': forms.TextInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'Phone Number'
            }),
        }
    
    def clean(self):    
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password_confirm = cleaned_data.get('password_confirm') 
        if password and password_confirm and password != password_confirm:
            raise forms.ValidationError("Passwords do not match!")
        return cleaned_data
    
class userRegForm (forms.ModelForm):
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control-sm',
            'id': 'floatingInput',
            'placeholder': 'Password'
        }),
        label="Password"
    )
    password_confirm = forms.CharField(
        widget=forms.PasswordInput(attrs={
            'class': 'form-control-sm',
            'id': 'floatingInput',
            'placeholder': 'Confirm Password'
        }),
        label="Confirm Password"
    )

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phonenumber']
        widgets = {
            'first_name': forms.TextInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'First Name'
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'Last Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'Email'
            }),
            'phonenumber': forms.TextInput(attrs={
                'class': 'form-control-sm',
                'id': 'floatingInput',
                'placeholder': 'Phone Number'
            }),
        }

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password_confirm = cleaned_data.get('password_confirm')

        if password and password_confirm and password != password_confirm:
            raise forms.ValidationError("Passwords do not match!")
        return cleaned_data
    
class roomForm(forms.ModelForm):
    class Meta:
        model = Room
        fields = ['Room_image', 'Room_details']
        widgets = {
            'Room_image': forms.ClearableFileInput(attrs={'class': 'form-control'}),
            'Room_details': forms.Textarea(attrs={'class': 'form-control'}),
        }